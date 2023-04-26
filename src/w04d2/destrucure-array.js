let numbers = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = numbers;

a;
b;
c;
d;
e;

let [f, g, ...rest] = numbers;

f;
g;
rest;

let [, , h, , i] = numbers;

h;
i;
