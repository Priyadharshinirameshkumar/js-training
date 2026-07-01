// Function 1

function multiply(a: number, b: number): number {
  return a * b;
}

// Function 2

function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// Function 3

function isAdult(age: number): boolean {
  return age >= 18;
}

// Function 4

function getFirstElement(arr: string[]): string {
  return arr[0];
}

console.log(multiply(5, 2));
console.log(formatName("Alice", "Smith"));
console.log(isAdult(20));
console.log(getFirstElement(["apple", "banana", "cherry"]));

//multiply("5", 2);  Argument of type 'string' is not assignable to parameter of type 'number'.
//formatName(100, "Smith");  Argument of type 'number' is not assignable to parameter of type 'string'.

// TypeScript checks both function parameters and return values.
// Passing arguments of the wrong type results in a compile-time error.