/*
Functions to make requests to and extract data from
https://educationdata.urban.org/api/v1/college-university/ipeds

Notes:
- Institutions are identified by `unitid` in the dataset
- Some queries will return multiple results for a single unitid, each
representing a different subset of that unitid's population such as
full-time/part-time/total.
*/

// latest year for retention data
const LATEST = 2018

const BASE = "https://educationdata.urban.org/api/v1/college-university/ipeds/"

// TODO: make it work
function getFallRetention(unitid, year=LATEST) {
    if (!unitid) { return null; }

    // supported in all browsers that matter, i.e. not IE
    params = URLSearchParams();
    params.append("unitid", unitid);

    url = new URL(`/${year}/?${params}`, BASE);

    res = await fetch(url).then((e) => {
        // handle HTTP response code
    });
}