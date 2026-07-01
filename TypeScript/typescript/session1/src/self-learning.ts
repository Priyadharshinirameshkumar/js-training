
// 1. Union Types Examples


// Example 1
// The variable 'id' can store either a string or a number.
let id: string | number = 101;
id = "EMP101";

// Example 2
// This function accepts both string and number values.
function printValue(value: string | number): void {
  console.log(value);
}

printValue("Hello");
printValue(100);

// Example 3
// The variable 'status' can only hold one of the specified values.
let status1: "success" | "failure" | "pending" = "success";


// 2. Literal Types Example


// This function only accepts "GET" or "POST" as valid inputs.
function sendRequest(method: "GET" | "POST"): void {
  console.log(`Request Method: ${method}`);
}

// Valid function calls
sendRequest("GET");
sendRequest("POST");

// Invalid function call
// sendRequest("PUT"); // Error


// 3. Readonly Array Example

// The readonly keyword prevents modification of the array.
const fruits1: readonly string[] = [
  "Apple",
  "Banana",
  "Orange"
];

// Trying to add a new element will cause an error.
// fruits.push("Mango"); // Error

/*
The readonly keyword prevents accidental modification of an array.
It is useful when data should only be read and not changed.
*/


// 4. strictNullChecks Example


// This variable can store either a string or null.
let username2: string | null = "Alice";

// With strictNullChecks enabled, TypeScript will not allow
// string methods to be called without checking for null first.
// console.log(username.toUpperCase());

if (username2 !== null) {
  // Inside this block, TypeScript knows username is a string.
  console.log(username2.toUpperCase());
}

/*
When strictNullChecks is enabled, TypeScript does not allow
methods to be called on values that could be null or undefined.

We must first check that the value is not null before using it.
*/