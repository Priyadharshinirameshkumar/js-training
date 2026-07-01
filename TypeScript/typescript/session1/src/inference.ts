// Inferred — no annotation needed
let city = "Mumbai";
let year = 2024;

// Explicit — annotation required (no initial value)
let country: string;
let population: number;

country = "India";
population = 1400000000;

let mystery;

mystery = "hello";
mystery = 42;

// Since 'mystery' is declared without a type annotation or an initial value, TypeScript cannot determine its type. Therefore, it assigns the 'any' type. Variables of type 'any' can store values of any data type, which is why both a string and a number can be assigned without causing an error.