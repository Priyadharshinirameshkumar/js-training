// Task A — annotate these arrays

const fruits: string[] = ["apple", "banana", "cherry"];
const temperatures: number[] = [22.5, 19.0, 30.1];
const flags: boolean[] = [true, false, true];

// Task B — try adding wrong types

//fruits.push(42);  Argument of type 'number' is not assignable to parameter of type 'string'.
//temperatures.push("hot");   Argument of type 'string' is not assignable to parameter of type 'number'.

// Task C — mixed-type array using union type

//const mixed: (string | number)[] = ["Alice", 1, "Bob", 2];

//mixed.push(true);  Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// Correct values

fruits.push("orange");
temperatures.push(35.6);
flags.push(false);

// Task C — mixed-type array using union type

const mixed: (string | number)[] = ["Alice", 1, "Bob", 2];

mixed.push("Charlie");
mixed.push(3);
/*
string[] and Array<string> represent the same type of array.

string[] is a shorter and more commonly used syntax.
Array<string> is a generic syntax and is useful when working with
more complex types.

Both are interchangeable and can be used based on personal or team preference.
*/