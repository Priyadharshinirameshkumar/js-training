console.log("TypeScript is running");

const age: number = 30;
// We use tsc --noEmit when we only want to check for TypeScript errors.
// It validates the code without generating JavaScript files in the dist folder.
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));
/*
Where did the type annotations go in the output .js file?

The type annotations were removed during compilation because JavaScript
does not understand TypeScript types.


What does this tell you about where TypeScript's type safety lives?

TypeScript's type safety exists only during development and compilation.
After compilation, the generated JavaScript contains no type information.
*/