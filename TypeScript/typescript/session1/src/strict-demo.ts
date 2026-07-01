// noImplicitAny prevents TypeScript from automatically assigning the 'any' type.
// It forces us to specify the type so that type checking becomes safer.

function greet(name: string) {
  return "Hello " + name;
}

// strictNullChecks ensures that null and undefined are handled explicitly.
// This helps avoid runtime errors caused by unexpected null values.

let username: string | null = null;

console.log(greet("Alice"));
console.log(username);