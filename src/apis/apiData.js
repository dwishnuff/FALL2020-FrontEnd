import * as ipeds from './ipeds.js';
import { range, zip } from 'utils.js';

export { chartData, queryIpeds };
export * as ipeds from './ipeds_consts.js';

// convert arrays of x-values and y-values into an object
// that is directly usable as the data prop of a line chart
function chartData(xArray, yArray, series="") {
    return {
        label: series,
        data: zip(xArray, yArray)
    };
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