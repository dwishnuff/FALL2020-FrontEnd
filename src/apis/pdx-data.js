// functions to fetch data from our dataset, stored as JSON

import { zip } from './utils.js';

export { gradRatesBy, retentionBy };

export const LEGAL_SEX = "legal-sex";
export const RACE = "race-ethnicity";
export const GENDER = "gender";
export const ORIENTATION = "sexual-orientation";
export const URM = "urm"

const baseUrl = "/data/";
const gradRates = new URL("grad_rates.json", baseUrl);
const retention = new URL("retention.json", baseUrl);

async function fetchJson(url) {
    return await fetch(url).finally(r => r.json());
}

const data = {
    gradRates: fetchJson(gradRates),
    retention: fetchJson(retention)
}

// return graduation rate data partitioned on a feature such as
// race or gender for all years data is available for
//
// valid features are:
//   LEGAL_SEX
//   RACE           (race and ethnicity)
//   GENDER
//   ORIENTATION    (sexual orientation)
//
// as:
//   percent (of total graduates)
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
function gradRatesBy(feature, as="percent") {
    const years = data.gradRates.years;
    const totals = data.gradRates["total-graduates"];

    let results = {
        years: years,
        data: {}
    }
    if (as !== "percent") {
        results.data.totals = totals;
    }
    for (let k in data.gradRates[feature].keys()) {
        if (as === "percent") {
            results.data[k] = zip(totals, data.gradRates[feature][k]).map(pair => pair[1] / pair[0] * 100);
        } else {
            results.data[k] = data.gradRates[feature][k];
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
// for percents, returned object has the form:
//   {
//     years: [Number],
//     data: {
//       field: [Number],
//       ...
//     }
//   }
// for totals, data fields are objects with `init` and `final` properties
function retentionBy(feature, as="percent") {
    const years = data.retention.years;
    let totals = {
        init: data.retention["cohort-start-size"].total,//.map(Number.parseInt),
        final: data.retention["grad-or-persisted-cs"].total//.map(Number.parseInt),
    };
    if (as === "percent") {
        totals = zip(totals.init, totals.final).map(pair => pair[1] / pair[0] * 100);
    }

    const ft_init = data.retention["cohort-start-size"][feature]
    const ft_final = data.retention["grad-or-persisted-cs"][feature]

    // filter raw data into an object, keyed by the chosen
    // feature then by initial and final
    let results = {
        years: years,
        data: {
            totals: totals
        }
    };
    for (let k in ft_init.keys()) {
        results.data[k] = {
            init: ft_init[k],//.map(Number.parseInt),
            final: ft_final[k]//.map(Number.parseInt)
        };

        if (as === "percent") {
            results.data[k] = zip(results.data[k].init, results.data[k].final).map(pair => pair[1] / pair[0] * 100);
        }
    }

    return results;
}