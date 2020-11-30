/*
Functions to make requests to and extract data from
https://educationdata.urban.org/api/v1/college-university/ipeds

Notes:
- Institutions are identified by `unitid` in the dataset
- Some queries will return multiple results for a single unitid, each
representing a different subset of that unitid's population such as
full-time/part-time/total.
*/

import * as _ from "./ipeds_consts.js";
import { unzip } from "./utils.js";

export { getFallRetention, getFallEnrollmentByRace };
export * from "./ipeds_consts.js";

const BASE = "https://educationdata.urban.org/";
const API = "api/v1/college-university/ipeds/";

// should return an array of { label: int_code, data: [ints] } where the int_code is an
// integer code corresponding to a race listed in the IPEDS data
async function getFallEnrollmentByRace(
	unitid,
	start = _.EARLIEST,
	end = _.LATEST,
	levelOfStudy = _.ALL
) {
	if (!unitid) {
		return null;
	}

	const api = API + _.FALL_ENROLLMENT;
	const endpt = "race/sex/";

	let params = new URLSearchParams();
	params.append("unitid", unitid);
	params.append("sex", 99);

	let res = [];
	for (let year = start; year <= end; year++) {
		let url = new URL(
			`${api}/${year}/${levelOfStudy}/${endpt}?${params}`,
			BASE
		);

		let r = await fetch(url)
			.then((e) => {
				// handle HTTP response code
				if (e.ok) {
					return e.json();
				}
				// TODO: handle errors
			})
			.then((data) => {
				// TODO: make this more robust in case of missing data

				// NOTE: this will be a list of enrollment values
				let temp = data.filter(
					(itm) => Number.parseInt(itm["sex"]) === 99
				);
				temp = temp.map((itm) => [
					Number.parseInt(itm["race"]),
					Number.parseInt(itm["enrollment_fall"]),
				]);
				return Array(temp).sort();
			});

		res.push(r);
	}

	return unzip(res)
		.map(unzip)
		.map((p) => {
			return { label: p[0][0], data: p[1] };
		});
}

// get overall undergrad fall retention rates for years from start to end, inclusive
async function getFallRetention(unitid, start = _.EARLIEST, end = _.LATEST) {
	if (!unitid) {
		return null;
	}

	const api = API + "fall-retention";

	// supported in all browsers that matter, i.e. not IE
	let params = new URLSearchParams();
	params.append("unitid", unitid);
	// code for total student body data
	params.append("ftpt", 99);

	let res = [];
	for (let year = start; year <= end; year++) {
		let url = new URL(`${api}/${year}/?${params}`, BASE);

		let r = await fetch(url)
			.then((e) => {
				// handle HTTP response code
				if (e.ok) {
					return e.json();
				}
				// TODO: handle errors
			})
			.then((data) => {
				// TODO: make this more robust in case of missing data
				return data.results[0]["retention_rate"];
			});

		// TODO: package data in a better way
		if (r) {
			res.push(r);
		}
	}

	return res;
}
