export { range, zip };

// Range from start (inclusive) to end (exclusive)
function range(start, end, interval=1) {
    const diff = end - start;
    const len = Math.floor(diff / interval + (diff % 2));
    return Array(len).keys().map(i => interval * i + start);
}

function zip(a, b) {
    const len = Math.min(a.length, b.length);

    let res = [];
    for (let i = 0; i < len; i++) {
        res.push([a[i], b[i]]);
    }

    return res;
}