// functions to fetch data from our dataset, stored as JSON
//
// These can be imported directly for use, but it's best to
// use the wrappers provided in `apiData.js`.

import { zip } from './utils.js';

export { gradDemoBy, retentionBy };

export const LEGAL_SEX = "legal-sex";
export const RACE = "race-ethnicity";
export const GENDER = "gender";
export const ORIENTATION = "sexual-orientation";
export const URM = "urm"

const baseUrl = process.env.PUBLIC_URL + "/data/";
const gradDemo = baseUrl + "grad_demographics.json";
const retention = baseUrl + "retention.json";

async function fetchJson(url) {
    return fetch(url).then((r) => r.json());
}

// return CS graduate demographic data partitioned on a feature such as
// race or gender for all years data is available for
//
// valid features are:
//   LEGAL_SEX
//   RACE           (race and ethnicity)
//   GENDER
//   ORIENTATION    (sexual orientation)
//
// as:
//   percent (of total CS graduates)
//   totals
//
// for percents, returned object has the form:
//   {
//     years: [Number],
//     data: {
//       <field>: [Number],
//       ...
//     }
//   }
//
// totals are only returned with the data if not in "percent" mode
async function gradDemoBy(feature, as="percent") {
    let gradDemoData = await fetchJson(gradDemo);
    const years = gradDemoData.years;
    const totals = gradDemoData["total-graduates"];

    let results = {
        years: years,
        data: {}
    }
    if (as !== "percent") {
        results.data.totals = totals;
    }
    for (let k of Object.keys(gradDemoData[feature])) {
        if (as === "percent") {
            results.data[k] = zip(totals, gradDemoData[feature][k]).map(pair => (pair[1] / pair[0] * 100).toFixed(2));
        } else {
            results.data[k] = gradDemoData[feature][k];
        }
    }

    return results;
}

// return retention per cohort (defined by start year) partitioned
// on a feature for which data are available
//
// valid features are:
//   LEGAL_SEX
//   URM        (true/false: member of an under-represented minority)
//
// as:
//   percent
//   totals
//
// for counts, returned object has the form:
//   {
//     years: [Number],
//     data: {
//       <field>: {
//         init: [Number],
//         final: [Number]
//       },
//       ...
//     }
//   }
// for percentages, data fields are similar in structure to those
// documented for `gradDemoBy`
async function retentionBy(feature, as="percent") {
    const retentionData = await fetchJson(retention);
    const years = retentionData.years;
    let totals = {
        init: retentionData["cohort-start-size"].total,//.map(Number.parseInt),
        final: retentionData["grad-or-persisted-cs"].total//.map(Number.parseInt),
    };
    if (as === "percent") {
        totals = zip(totals.init, totals.final).map(pair => (pair[1] / pair[0] * 100).toFixed(2));
    }

    const ft_init = retentionData["cohort-start-size"][feature]
    const ft_final = retentionData["grad-or-persisted-cs"][feature]

    // filter raw data into an object, keyed by the chosen
    // feature then by initial and final
    let results = {
        years: years,
        data: {
            totals: totals
        }
    };
    for (let k of Object.keys(ft_init)) {
        results.data[k] = {
            init: ft_init[k],//.map(Number.parseInt),
            final: ft_final[k]//.map(Number.parseInt)
        };

        if (as === "percent") {
            results.data[k] = zip(results.data[k].init, results.data[k].final).map(pair => (pair[1] / pair[0] * 100).toFixed(2));
        }
    }

    return results;
}