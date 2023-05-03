const answer = pairDelete(["a", "b", "c", "d", "e"], 3, 1); // => ['a', 'c', 'e']

answer;

/**
 * @param {string[]} arr
 * @param {number} i
 * @param {number} j
 */
function pairDelete(arr, i, j) {
	if (i < j) {
		arr.splice(j, 1);
		arr.splice(i, 1);
	} else {
		return pairDelete(arr, j, i);
	}

	return arr;
}
