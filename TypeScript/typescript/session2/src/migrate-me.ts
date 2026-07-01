export {};

// Interface

interface User {
  id: string;
  name: string;
  email: string;
}

// Cache
const cache: Record<string, User> = {};

// Fetch User From Cache
function fetchUserFromCache(
  id: string
): User | null {
  return cache[id] || null;
}

// Save User To Cache
function saveUserToCache(
  user: User
): void {
  cache[user.id] = user;
}
// Process Users
function processUsers<T, U>(
  users: T[],
  filterFn: (user: T) => boolean,
  transformFn: (user: T) => U
): U[] {
  return users
    .filter(filterFn)
    .map(transformFn);
}
// Build Query String
function buildQueryString(
  params: Record<string, string | number | boolean>
): string {
  return Object.keys(params)
    .map((key) => {
      return (
        key +
        "=" +
        encodeURIComponent(
          String(params[key])
        )
      );
    })
    .join("&");
}
// Generic Retry Function
function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number,
  delay: number
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let attempt = 0;
    function run(): void {
      attempt++;
      fn()
        .then(resolve)
        .catch((err) => {
          if (attempt >= maxAttempts) {
            reject(err);
          } else {
            setTimeout(run, delay);
          }
        });
    }
    run();
  });
}
// Testing
const user: User = {
  id: "U001",
  name: "Alice",
  email: "alice@example.com"
};
saveUserToCache(user);
console.log(
  fetchUserFromCache("U001")
);
const names = processUsers(
  [user],
  (u) => u.name.startsWith("A"),
  (u) => u.name
);
console.log(names);
console.log(
  buildQueryString({
    search: "typescript",
    page: 1,
    active: true
  })
);
retry(
  () => Promise.resolve("Success"),
  3,
  1000
).then(console.log);
/*
The generic type <T> preserves the return type
of the function passed to retry.
Example:
retry(() => Promise.resolve("Hello"), 3, 1000)
returns Promise<string>

retry(() => Promise.resolve(100), 3, 1000)
returns Promise<number>

This makes the function reusable while
maintaining type safety.
*/