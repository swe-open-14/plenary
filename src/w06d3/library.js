const express = require("express");
const books = require("./books");

const app = express();

app.use(express.json());

// Add a GET handler on the "/books" route that responds with the collection of
// books in an `application/json` response body.
app.get("/books", (req, res) => {
	res.json(books);
});

// Add a GET handler on the "/books/:isbn" route that responds with a single
// book in an `application/json` response body. If the book is not found,
// respond with the Not Found status.

app.get("/books/:isbn", (req, res) => {
	const { isbn } = req.params;

	if (!isbn) {
		res.sendStatus(400);
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
