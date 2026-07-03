/*
Difference : Browser JavaScript runs inside a web browser and can access
HTML, CSS, and the DOM.

Node.js runs JavaScript outside the browser in the terminal.
It cannot access HTML or the DOM but can read files,
create servers, and interact with the operating system.
*/

const message = "Hello from Node.js";

console.log(message);

const fruits = ["apple", "banana", "mango"];

const upper = fruits.map(f => f.toUpperCase());

console.log(upper);


/*
REPL stands for Read-Evaluate-Print Loop.

It is an interactive environment provided by Node.js where
you can write JavaScript code, execute it immediately, and
see the output.

It is useful for testing small code snippets, debugging,
learning JavaScript, and experimenting without creating a file.
*/