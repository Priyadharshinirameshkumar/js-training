export {};
interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}
// 1. Partial<T>
const existingUser: User = {
  id: "U001",
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  role: "admin"
};

function updateUser(
  user: User,
  updates: Partial<User>
): User {

  return {
    ...user,
    ...updates
  };
}
const updatedUser = updateUser(
  existingUser,
  {
    email: "alice.new@example.com"
  }
);

console.log(updatedUser);

/*
Partial<T> makes all properties optional.
This is useful when updating an object because only the fields that need to change must be provided.
*/

// 2. Pick<T, K>
type UserContactInfo = Pick<
  User,
  "name" | "email"
>;
function sendWelcomeEmail(
  user: UserContactInfo
): void {

  console.log(
    `Welcome ${user.name}! Email sent to ${user.email}`
  );
}
sendWelcomeEmail({
  name: "Bob",
  email: "bob@example.com"
});

//Pick<T, K> creates a new type containing only the selected properties from an existing type.

// 3. Omit<T, K>
type NewUser = Omit<User, "id">;

function createUser(
  user: NewUser
): User {
  return {
    id: Math.random().toString(),
    ...user
  };
}
const newUser = createUser({
  name: "Charlie",
  email: "charlie@example.com",
  role: "viewer"
});
console.log(newUser);

/*
Omit<T, K> creates a new type by removing specified properties from an existing type.
Here, the id is removed because it will be generated automatically inside the function.
*/

// 4. Record<K, V>
type UserRole =
  | "admin"
  | "editor"
  | "viewer";
type RolePermissions = Record<
  UserRole,
  string[]
>;
const permissions: RolePermissions = {
  admin: [
    "create",
    "read",
    "update",
    "delete"
  ],
  editor: [
    "read",
    "update"
  ],
  viewer: [
    "read"
  ]
};

function getPermissions(
  role: UserRole
): string[] {

  return permissions[role];
}
console.log(
  getPermissions("admin")
);
console.log(
  getPermissions("viewer")
);
/*
Record<K, V> creates an object type where:
K = keys
V = values
It is useful for dictionaries, mappings,
or lookup tables.
*/


