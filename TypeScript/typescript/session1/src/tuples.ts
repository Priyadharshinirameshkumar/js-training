// Task A — define a tuple for a user record: [name, age, isActive]

const userRecord: [string, number, boolean] = ["Alice", 30, true];

// Task B — access each element and prove TS knows the type

console.log(userRecord[0].toUpperCase());
console.log(userRecord[1].toFixed(2));
console.log(userRecord[2].toString());

// Task C — wrong order

//const wrongOrder: [string, number, boolean] = [30, "Alice", true];
//Type 'number' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'number'.
const correctOrder: [string, number, boolean] = ["Alice", 30, true];
// Task D — coordinate pair

const coordinates: [number, number] = [19.076, 72.877];
//userRecord.push("extra");
/*
A tuple stores a fixed number of elements in a specific order.

When I tried to add a fourth element, TypeScript allowed the push operation,
but the tuple type still only guarantees the first three positions.
This means extra values are not considered part of the original tuple structure.
*/