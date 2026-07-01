// Part A — any

let dangerousValue: any = "hello";

dangerousValue = 42;
dangerousValue = { name: "Alice" };

// No TypeScript error, but this may crash at runtime
// console.log(dangerousValue.foo.bar);

// Part B — unknown

let safeValue: unknown = "hello";

// TypeScript requires a type check before usage
if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}

/*
Type narrowing is the process of reducing a variable from a broader type
to a more specific type using checks such as typeof, instanceof, or conditions.

In this example, safeValue has the type 'unknown'. By checking
typeof safeValue === "string", TypeScript understands that inside
the if block safeValue is a string, allowing string methods to be used safely.
*/