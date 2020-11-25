export { range, unzip, zip };

// Range from start (inclusive) to end (exclusive)
function range(start, end, interval=1) {
    const diff = end - start;
    const len = Math.floor(diff / interval + !!(diff % interval));
    return [...Array(len).keys()].map(i => interval * i + start);
}

function unzip(arr) {
    const inner_len = Math.min(...arr.map(a => a.length));

    return range(0, inner_len).map(i => arr.map(a => a[i]));
}

function zip(a, b) {
    const len = Math.min(a.length, b.length);

    let res = [];
    for (let i = 0; i < len; i++) {
        res.push([a[i], b[i]]);
    }

    return res;
}