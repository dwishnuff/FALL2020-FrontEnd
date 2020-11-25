import './ipeds.js';

export {chartData};

// convert arrays of x-values and y-values into an object
// that is directly usable as the data prop of a line chart
function chartData(xArray, yArray, series="") {
    return {
        series: series,
        data: zip(xArray, yArray)
    };
}

function zip(a, b) {
    const len = Math.min(a.length, b.length);

    let res = [];
    for (let i = 0; i < len; i++) {
        res.push([a[i], b[i]]);
    }

    return res;
}