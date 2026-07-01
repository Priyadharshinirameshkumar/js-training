export {};
// Error 1

/*
Error: Property 'username' does not exist on type 'User'.

Meaning: TypeScript cannot find a property named 'username'inside the User interface.
*/

interface User {
  name: string;
}

const user: User = {
  name: "Alice"
};

// Error
// console.log(user.username);

// Fix
console.log(user.name);

// Error 2

/*
Error: Argument of type 'string' is not assignable to parameter of type 'number'.

Meaning: A function expects a number, but a string was passed instead.
*/

function square(num: number): number {
  return num * num;
}

// Error
// square("5");

// Fix
square(5);



// Error 3


/*
Error:Parameter 'data' implicitly has an 'any' type.

Meaning:A function parameter has no type annotation,and TypeScript cannot determine its type.
*/

// Error
// function printData(data) {
//   console.log(data);
// }

// Fix
function printData(data: string): void {
  console.log(data);
}

printData("Hello");

// Error 4


/*
Error: Object is possibly 'undefined'.

Meaning: The value may be undefined, so accessing its properties directly is unsafe.
*/

const users = ["Alice", "Bob"];

// Error
// const found = users.find(user => user === "David");
// console.log(found.toUpperCase());

// Fix
const found = users.find(user => user === "David");

if (found !== undefined) {
  console.log(found.toUpperCase());
}

// Error 5

/*
Error:Type 'string | undefined' is not assignable to type 'string'.

Meaning: A variable may contain undefined, but the target variable only accepts string values.
*/

interface Profile {
  bio?: string;
}

// Error
// const profile: Profile = {};
// const bio: string = profile.bio;

// Fix
const profile: Profile = {};

const bio: string = profile.bio ?? "No bio available";

console.log(bio);


