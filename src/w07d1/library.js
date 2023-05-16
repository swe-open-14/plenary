const express = require("express");
const books = require("./books.js");
const { isValid } = require("./isbn.js");

const app = express();

app.use(express.json());

/**
 *  GET /books returns a collection of books.
 */
app.get("/books", (req, res) => {
	res.json(books);
});

/**
 * GET /books/:isbn returns a single book with the matching isbn number.
 */
app.get("/books/:isbn", (req, res) => {
	const { isbn } = req.params;

	if (!isValid(isbn)) {
		res.sendStatus(422);
		return;
	}

	const book = books.find((book) => book.isbn === isbn);

	if (book) {
		res.json(book);
	} else {
		res.sendStatus(404);
	}
});

module.exports = app;
