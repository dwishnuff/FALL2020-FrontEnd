/*
Functions to make requests to and extract data from
https://educationdata.urban.org/api/v1/college-university/ipeds

Notes:
- Institutions are identified by `unitid` in the dataset
- Some queries will return multiple results for a single unitid, each
representing a different subset of that unitid's population such as
full-time/part-time/total.
*/

export { getFallRetention };

// latest year for retention data
const LATEST = 2018

const BASE = "https://educationdata.urban.org/"
const API = "api/v1/college-university/ipeds/"

// get overall undergrad fall retention rates for years from start to end, inclusive
async function getFallRetention(unitid, start=LATEST, end=LATEST) {
    if (!unitid) { return null; }

    const api = API + "fall-retention"

    // supported in all browsers that matter, i.e. not IE
    let params = new URLSearchParams();
    params.append("unitid", unitid);
    // code for total student body data
    params.append("ftpt", 99);

    let res = []
    for (let year=start; year<=end; year++) {
        let url = new URL(`${api}/${year}/?${params}`, BASE);

        let r = await fetch(url).then((e) => {
            // handle HTTP response code
            if (e.ok) {
                return e.json();
            }
            // TODO: handle errors
        }).then((data) => {
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