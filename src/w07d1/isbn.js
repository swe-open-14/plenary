/**
 * Check to see is the `isbn` parameter is a valid IBSN-13 number, i.e., it has
 * the correct format.
 *
 * @private
 * This REGEX doesn't actually test for ISBN-31 numbers correctly.
 * TODO - fix this
 *
 * @param {string} isbn - the International Standard Book Number in ISBN-13 format.
 * @returns {boolean} `true` if the value is a valid ISBN-13 number.
 */
const isValid = (isbn) => {
	return /^\d+-\d+$/.test(isbn);
};

const old_isValid = (isbn) => {
	/^\d+-\d+$/.test(isbn);
};

module.exports = { isValid, old_isValid };
