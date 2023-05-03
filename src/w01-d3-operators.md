---
marp: true
---

<style>
	@import url(https://fonts.bunny.net/css?family=fira-code:400|fira-sans:400,700);

:root {
    --color-background: #ddd;
    --color-background-code: #ccc;
    --color-background-paginate: rgba(128, 128, 128, 0.05);
    --color-foreground: #345;
    --color-highlight: #99c;
    --color-highlight-hover: #aaf;
    --color-highlight-heading: #99c;
    --color-header: #bbb;
    --color-header-shadow: transparent;
	}

	section {
		font-family: 'Fira Sans', sans-serif;
	}

	code {
		font-family: 'Fira Code', monospace;
		border-radius: 0.25em;
		margin: auto -0.25em;
		padding: auto 0.25em;
	}
</style>

# Testing for Equality

There are two equality operators in JavaScript.

The equality operator `==` (equals equals) attempts to convert and compare operands of different types:

```js
42 == "42" // true
```

The strict equality operator `===` (equals equals equals) will compare both the type and value of the operands:

```js
42 === "42" // false
```

---

# Not everything is equal

There are two inequality operators in JavaScript.

The inequality operator `!=` (not equals) attempts to convert and compare operands of different types:

```js
42 != "42" // false
```

The strict inequality operator `!==` (not equals equals) will compare both the type and value of the operands:

```js
42 !== "42" // true
```
