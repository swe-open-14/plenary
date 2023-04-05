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

# Variable Declaration

To declare a variable in JavaScript we bind an *identifier* to an assignment *expression*.

```js
var width = 1;
var height = 2;
var area = width * height;
var message = "Area is " + area;
```

---

# Hello, World!

```js
var greeting = "Hello, World!";

console.log(greeting);
```

---

# What is wrong with this code?

```js
console.log(greeting);

var greeting = "Hello, World!";
```

---

In JavaScript, variables declared using the `var` keyword are hoisted because of the way the JavaScript engine processes code during the compilation and execution phases.

When a JavaScript program is compiled, the JavaScript engine goes through a process called *hoisting* where it scans the code for variable and function declarations and moves them to the top of their respective scopes. This means that, regardless of where a variable is declared within a function or block, the declaration is effectively *hoisted* to the top of that function or block.

---

However, it is important to note that only the declaration of the variable is hoisted, not its assignment or initialization. This means that if you declare a variable using `var` but don't assign it a value until later in the code, the variable will still be hoisted to the top of the scope but its value will be `undefined` until it is assigned a value later in the code.

```js
var greeting; // hoisted

console.log(greeting);

greeting = "Hello, World!";
```

---

# `Let`'s make it better

This hoisting behavior can sometimes lead to unexpected results or bugs in JavaScript code, especially if the developer is not aware of the hoisting mechanism. That's why, starting with ECMAScript 6 (ES6), the `let` and `const` keywords were introduced, which do not exhibit the same hoisting behavior as `var`. Instead, they have block-level scoping and are not hoisted to the top of their respective scopes.

```js
let greeting = "Hello, World!"; 

console.log(greeting);
```

---

# Comparing languages

```js
// JavaScript
let greeting = "Hello, World!";
console.log(greeting);
```

```python
# Python
greeting = "Hello, World!"
print(greeting)
```

```cs
// C#
string greeting = "Hello, World!";
Console.WriteLine(greeting);
```

```java
// Java
String greeting = "Hello, World!";
System.out.println(greeting);
```

---

# `Const`antly correct

Use `const` to declare a variable when the value of the variable will not change throughout the program. Once a value is assigned to a `const` variable, it cannot be reassigned. This is useful for declaring constants or for preventing accidental reassignment of a variable.

```js
const greeting = "Hello, World!";

console.log(greeting);
```

---

# Comparing languages

```js
// JavaScript
const greeting = "Hello, World!";
console.log(greeting);
```

```python
# Python
GREETING = "Hello, World!" 
print(GREETING)
```

```cs
// C#
const string greeting = "Hello, World!";
Console.WriteLine(greeting);
```

```java
// Java
final String greeting = "Hello, World!";
System.out.println(greeting);
```