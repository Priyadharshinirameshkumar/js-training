type User = { fullName: string };

function getUserLabel(user: User): string {
  return user.fullName.toUpperCase();
}

const user: User = { fullName: "Alice Smith" };

console.log(getUserLabel(user));

// In JavaScript, the bug was found only when the program was executed.
// In TypeScript, the bug was detected during compilation before running the code.
// This helps identify errors earlier and makes debugging easier.