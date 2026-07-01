// Task A — void: function that logs but returns nothing

function logEvent(event: string): void {
  console.log(`[LOG] ${event}`);
}

const result = logEvent("user_login");

// Since logEvent does not return any value, result will be undefined.
console.log(result);

// Task B — never: function that always throws

function fail(message: string): never {
  throw new Error(message);
}

// Task C — void function

function doSomething(): void {
  console.log("Doing something...");
}

// Another example of never

function runForever(): never {
  while (true) {
    console.log("Running...");
  }
}

/*
A function with return type 'never' never successfully completes execution.

It can either throw an error or run forever in an infinite loop.
Since the function never reaches an endpoint, TypeScript assigns the return type 'never'.
*/