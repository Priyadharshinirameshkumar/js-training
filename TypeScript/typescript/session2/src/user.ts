

interface User {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}

const adminUser: User = {
  id: 1,
  //adminUser.id = 100;  Cannot assign to 'id' because it is a read-only property.
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  role: "admin"
};

const editorUser: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  role: "editor"
};

const viewerUser: User = {
  id: 3,
  name: "Charlie",
  email: "charlie@example.com",
  age: 25,
  role: "viewer"
};

/*const invalidUser: User = {
  id: 4,
  name: "David",
  email: "david@example.com",
  role: "superuser"   --->  Type '"superuser"' is not assignable to type '"admin" | "editor" | "viewer"'.
}; 
*/
console.log(adminUser);
console.log(editorUser);
console.log(viewerUser);

/*
Using readonly is better than simply trusting developers not to change the id.

The readonly keyword allows TypeScript to enforce the rule at compile time.
If someone accidentally tries to modify the id, TypeScript immediately shows an error,
helping maintain data integrity and preventing unintended changes.
*/