// Wrappers around API calls, intended to return data in structures
// that work nicely with react-charts and similar libraries.

import * as ipeds from "./ipeds.js";
import { mergeArrays, range, zip } from "./utils.js";
import { gradDemoBy, retentionBy } from "./pdx_data.js";

export {
	applyColors,
	chartData,
	mergeData,
	pdxDataCounts,
	pdxDataPercents,
	queryIpeds,
};
export * as ipeds from "./ipeds_consts.js";

// convert arrays of x-values and y-values into an object
// that is directly usable as the data prop of a line chart
function chartData(xArray, yArray, series = "") {
	return {
		labels: xArray,
		datasets: [
			{
				label: series,
				data: yArray,
			},
		],
	};
}

// in-order merge of datasets with possibly-overlapping, sortable
// x-values
function mergeData(datasets) {
	const res_labels = datasets
		.map((d) => d.labels)
		.reduce((a, e) => mergeArrays(a, e));

	let res_datasets = [];
	for (let ds of datasets) {
		let y_temp = new Array(res_labels.length).fill(0);
		for (let d of ds.datasets) {
			for (let [i, v] of ds.labels.entries()) {
				y_temp[res_labels.findIndex((x) => x === v)] = d.data[i];
			}
			res_datasets.push({ label: d.label, data: y_temp });
		}
	}

	return { labels: res_labels, datasets: res_datasets };
}

// apply color styles to datasets, for use with react-chartjs-2
//
// arguments:
//   data :: { labels: [...], datasets: [{ label: String, data: [...] }, ...] }
//   colors :: [{fill?: Boolean, backgroundColor?: rgbString, ...}, ...]
// The colors array must be longer than data.datasets or some data will be omitted.
function applyColors(data, colors) {
	return {
		labels: data.labels,
		datasets: zip(data.datasets, colors).map(([d, c]) => {
			for (let k of Object.keys(c)) {
				d[k] = c[k];
			}
			return d;
		}),
	};
}

// get CS graduate demographic data or CS retention data
// from our JSON data sets as percentages
//
//
// Return values should have the form:
//   [
//     {
//       data: [(Year, Number)],
//       label: <field name>
//     }
//   ]
async function pdxDataPercents(type, feature) {
	let res = [];
	let data = {};
	switch (type) {
		case "grad-demographics":
			await gradDemoBy(feature, "percent").then((d) => {
				data = d;
			});
			for (let k of Object.keys(data.data)) {
				res.push(chartData(data.years, data.data[k], k));
			}
			break;
		case "retention":
			await retentionBy(feature, "percent").then((d) => {
				data = d;
			});
			for (let k of Object.keys(data.data)) {
				res.push(chartData(data.years, data.data[k], k));
			}
			break;
		default:
			break;
	}
	return mergeData(res);
}

// get CS graduate demographic data or CS retention data
// from our JSON data sets as counts
//
// Grad demographics return values should be similar to those documented
// for `pdxDataPercentages`
//
// Retention data should be returned in an array with the form:
//   [
//     {
//       data: [(year, Number)],
//       label: "initial <field name>"
//     },
//     {
//       data: [(year, Number)],
//       label: "final <field name>"
//     },
//     ...
//   ]
// That is, the structure will be the same, but both initial and final values
// will be present in their own series.
async function pdxDataCounts(type, feature, keepTotals = true) {
	let res = [];
	let data = {};
	switch (type) {
		case "grad-demographics":
			await gradDemoBy(feature, "counts").then((d) => {
				data = d;
			});
			for (let k of Object.keys(data.data)) {
				if (keepTotals || k !== "totals") {
					res.push(chartData(data.years, data.data[k], k));
				}
			}
			break;
		case "retention":
			await retentionBy(feature, "percent").then((d) => {
				data = d;
			});
			for (let k of Object.keys(data.data)) {
				if (keepTotals || k !== "totals") {
					res.push(
						chartData(data.years, data.data[k].init, "initial" + k)
					);
					res.push(
						chartData(data.years, data.data[k].final, "final" + k)
					);
				}
			}
			break;
		default:
			break;
	}

	return mergeData(res);
}

// Get time series of various attributes available from the IPEDS dataset
// returns an Array of objects suitable for use with react-charts
function queryIpeds(
	unitid,
	feature = ipeds.FALL_RETENTION,
	startYear = ipeds.EARLIEST,
	endYear = ipeds.LATEST,
	filters = { ftpt: ipeds.ALL, levelOfStudy: ipeds.ALL }
) {
	if (!unitid) {
		return null;
	}

	const years = range(startYear, endYear);
	switch (feature) {
		case ipeds.FALL_ENROLLMENT:
			return ipeds
				.getFallEnrollmentByRace(unitid, startYear, endYear, filters)
				.map(({ label, data }) => chartData(years, data, label));
		case ipeds.FALL_RETENTION:
			return [
				chartData(
					years,
					ipeds.getFallRetention(unitid, startYear, endYear, filters)
				),
			];
		default:
			return null;
	}
}
