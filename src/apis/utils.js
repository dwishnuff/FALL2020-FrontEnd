export { mergeArrays, range, resultOrZero, unzip, zip };

// sorted merge, keeping exactly one copy of each unique element
function mergeArrays(a, b) {
	let i = 0;
	let res = [];
	res = res.concat(a).sort();
	for (let n of b) {
		i = res.findIndex((e) => n <= e);
		if (i === -1) {
			// n is the max, so push it to the back
			res.push(n);
		} else if (n !== res[i]) {
			// insert in sorted order
			res.splice(i, 0, n);
		}
		// else if n is already in the array do nothing
	}
	return res;
}

// Range from start (inclusive) to end (exclusive)
function range(start, end, interval = 1) {
	const diff = end - start;
	const len = Math.floor(diff / interval + !!(diff % interval));
	return [...Array(len).keys()].map((i) => interval * i + start);
}

// return a zero value if passed undefined or null or other false-y stuff;
// otherwise call the provided function on the passed value
function resultOrZero(x, f = (v) => v, zero=0) {
	if (!x) {
		return zero;
	}

	return f(x);
}

function unzip(arr) {
	const inner_len = Math.min(...arr.map((a) => a.length));

	return range(0, inner_len).map((i) => arr.map((a) => a[i]));
}

// zip :: [A] -> [B] -> [[A, B]]
// (should work with any number of arguments)
function zip(a, b) {
	if (arguments.length < 1) {
		return undefined;
	}

	const len = Math.min(a.length, b.length);

	let res = [];
	for (let i = 0; i < len; i++) {
		res.push(Array.from(arguments).map(arr => arr[i]));
	}

	return res;
}
