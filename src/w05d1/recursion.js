function recurse(i) {
	try {
		recurse(i + 1);
	} catch {
		console.log(i);
	}
}

console.log(recurse(0));
