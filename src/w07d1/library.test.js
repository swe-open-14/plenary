const { describe, expect, it, test } = require("@jest/globals");

const app = require("./library.js");
const request = require("supertest");

describe("GET /books", () => {
	let response;

	beforeEach(async () => {
		response = await request(app).get("/books");
	});

	it("succeeds", async () => {
		const { ok } = response;

		expect(ok).toBe(true);
	});

	it("responds with body containing `application/json`", async () => {
		const { headers } = response;

		expect(headers["content-type"]).toMatch("application/json");
	});

	it("responds with body containing a list of books", async () => {
		const { body } = response;

		expect(Array.isArray(body)).toBe(true);
		expect(body.every(({ isbn }) => isbn)).toBe(true);
	});
});

describe("GET /books/978-1491973899", () => {
	let response;

	beforeEach(async () => {
		response = await request(app).get("/books/978-1491973899");
	});

	it("succeeds", async () => {
		const { ok } = response;

		expect(ok).toBe(true);
	});

	it("responds with a body containing `application/json`", () => {
		const { headers } = response;

		expect(headers["content-type"]).toMatch("application/json");
	});

	it("responds with a body containing a book", () => {
		const { body } = response;

		expect(body.author).toBe("Camille Fournier");
		expect(body.title).toMatch("The Manager`s Path");
	});
});

describe("GET /books/978-1119056072", () => {
	let response;

	beforeEach(async () => {
		response = await request(app).get("/books/978-1119056072");
	});

	it("fails with Not Found response", async () => {
		const { statusCode } = response;

		expect(statusCode).toBe(404);
	});
});
