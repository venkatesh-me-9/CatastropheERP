function encodeArray(arr = []) {
	return arr.map((x) => encodeURIComponent(JSON.stringify(x))).join(',');
}

function decodeArray(str = '') {
	return str.split(',').map((x) => JSON.parse(decodeURIComponent(x)));
}

function encodeObject(obj = {}) {
	const arr = Object.entries(obj).map((x) => {
		x[1] =
			typeof x[1] === 'object'
				? encodeURIComponent(JSON.stringify(x[1]))
				: encodeURIComponent(x[1]);
		return x;
	});

	return JSON.stringify(
		arr.reduce((p, a) => {
			p[a[0]] = a[1];
			return p;
		}, {})
	)
		.replaceAll('"', '')
		.slice(1, -1);
}

function decodeObject(str = '') {
	const arr = str
		.split(',')
		.map((x) => x.split(':'))
		.reduce((p, a) => {
			p[a[0]] = decodeURIComponent(a[1]);

			try {
				p[a[0]] = JSON.parse(p[a[0]]);
			} catch {}
			return p;
		}, {});
	return arr;
}

function paramEncode(obj = {}) {
	const arr = Object.entries(obj).map((x) => {
		if (typeof x[1] === 'object') {
			x[1] = Array.isArray(x[1]) ? encodeArray(x[1]) : encodeObject(x[1]);
		} else x[1] = encodeURIComponent(x[1]);
		return x;
	});

	return arr
		.reduce((p, a) => {
			p = `${p}&${a[0]}=${a[1]}`;
			return p;
		}, '')
		.slice(1);
}

function paramDecode(str = '') {
	const arr = str.split('&').map((x) => x.split('='));
	const arr1 = arr.map((x) => {
		if (x[1].includes(':')) x[1] = decodeObject(x[1]);
		else if (x[1].includes(',')) x[1] = decodeArray(x[1]);
		else x[1] = decodeURIComponent(x[1]);
		return x;
	});
	return arr;
}

export { paramDecode, paramEncode };
