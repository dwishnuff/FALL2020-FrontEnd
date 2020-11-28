// Wrappers around API calls, intended to return data in structures
// that work nicely with react-charts and similar libraries.

import * as ipeds from './ipeds.js';
import { range, zip } from 'utils.js';
import { gradDemoBy, retentionBy } from './pdx_data.js';

export { chartData, pdxDataCounts, pdxDataPercents, queryIpeds };
export * as ipeds from './ipeds_consts.js';

// convert arrays of x-values and y-values into an object
// that is directly usable as the data prop of a line chart
function chartData(xArray, yArray, series="") {
    return {
        label: series,
        data: zip(xArray, yArray)
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
function pdxDataPercents(type, feature) {
    let res = [];
    switch (type) {
        case "grad-demographics":
            const data = gradDemoBy(feature, as="percent");
            for (let k in data.data.keys()) {
                res.push(chartData(data.years, data.data[k], k));
            }
            break;
        case "retention":
            const data = retentionBy(feature, as="percent");
            for (let k in data.data.keys()) {
                res.push(chartData(data.years, data.data[k], k));
            }
            break;
        default:
            break;
    }
    return res;
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
function pdxDataCounts(type, feature, keepTotals=true) {
    let res = [];
    switch (type) {
        case "grad-demographics":
            const data = gradDemoBy(feature, as="counts");
            for (let k in data.data.keys()) {
                if (keepTotals || k !== "totals") {
                    res.push(chartData(data.years, data.data[k], k));
                }
            }
            break;
        case "retention":
            const data = retentionBy(feature, as="percent");
            for (let k in data.data.keys()) {
                if (keepTotals || k !== "totals") {
                    res.push(chartData(data.years, data.data[k].init, "initial" + k));
                    res.push(chartData(data.years, data.data[k].final, "final" + k));
                }
            }
            break;
        default:
            break;
    }

    return res;
}

// Get time series of various attributes available from the IPEDS dataset
// returns an Array of objects suitable for use with react-charts
function queryIpeds(unitid, feature=ipeds.FALL_RETENTION, startYear=ipeds.EARLIEST, endYear=ipeds.LATEST, filters={ftpt: ipeds.ALL, levelOfStudy: ipeds.ALL}) {
    if (!unitid) { return null; }

    const years = range(startYear, endYear);
    switch (feature) {
        case ipeds.FALL_ENROLLMENT:
            return ipeds.getFallEnrollmentByRace(unitid, startYear, endYear, filters).map(({label, data}) => chartData(years, data, label));
        case ipeds.FALL_RETENTION:
            return [chartData(years, ipeds.getFallRetention(unitid, startYear, endYear, filters))];
        default:
            return null;
    }
}