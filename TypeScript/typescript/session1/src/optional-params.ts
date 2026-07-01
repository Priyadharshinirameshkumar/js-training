// Task A — Optional Parameter

function greetUser(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

// Calling the function with only the name.
// Since title is optional, the output will be: Hello Alice
console.log(greetUser("Alice"));

// Calling the function with both name and title.
// The output will be: Hello Dr. Alice
console.log(greetUser("Alice", "Dr."));

// Task B — Default Parameter

function createAccount(
  email: string,
  role: string = "user"
): object {
  return { email, role };
}

// Since no role is provided, the default value "user" will be assigned.
console.log(createAccount("alice@example.com"));

// Here a role is provided, so "admin" overrides the default value.
console.log(createAccount("bob@example.com", "admin"));

/*
An optional parameter may or may not be provided when calling a function.
If it is not provided, its value becomes undefined.

A default parameter automatically gets a predefined value when no argument is passed.

I would use an optional parameter when the value is truly optional.
I would use a default parameter when I want a fallback value to be used automatically.
*/