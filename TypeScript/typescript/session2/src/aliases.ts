
// Task A — Type Aliases
type UserId = string;
type ProductId = string;
type Timestamp = number;
type Status = "active" | "inactive" | "pending";
type Direction = "north" | "south" | "east" | "west";

// Task B — Using Type Aliases
// UserId alias used as parameter type
function getUserById(id: UserId): void {
  console.log(`Fetching user with ID: ${id}`);
}

// UserId and Status aliases used as parameter types
function updateStatus(id: UserId, status: Status): void {
  console.log(`Updating user ${id} to ${status}`);
}

// Direction alias used as parameter type
function move(direction: Direction, steps: number): void {
  console.log(`Moving ${steps} steps towards ${direction}`);
}

// Function Calls

getUserById("USR001");

updateStatus("USR001", "active");

move("north", 5);

// Task C — Structural Typing Example

const userId: UserId = "USR001";
const productId: ProductId = "PRD001";

// TypeScript allows this because both aliases are strings
getUserById(productId);


/*
The function getUserById expects a UserId parameter.

However, TypeScript allows a ProductId to be passed because both UserId and ProductId are aliases of the string type.

Since TypeScript uses structural typing, it treats both aliases as regular strings and does not distinguish between them.
*/