// Primitive Types Examples

let username1: string = "Alice";
let score: number = 42;
let isLoggedIn: boolean = true;
let middleName: null = null;
let lastSeen: undefined = undefined;

// Try assigning wrong types

//username = 100;   Type 'number' is not assignable to type 'string'.
//score = "ninety";  Type 'string' is not assignable to type 'number'.
//isLoggedIn = 1;   Type 'number' is not assignable to type 'boolean'.

// Correct assignments

username1 = "Bob";
score = 90;
isLoggedIn = false;