// Challenge 1
// Calculate Discount

function throwDiscountError(message: string): never {
  throw new Error(message);
}

function calculateDiscount(
  price: number,
  discountPercent?: number
): number {

  // If no discount is provided, return original price
  if (discountPercent === undefined) {
    return price;
  }

  // Discount cannot be 100% or more
  if (discountPercent >= 100) {
    throwDiscountError("Discount cannot be 100% or more.");
  }

  return price - (price * discountPercent) / 100;
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));


// Challenge 2
// Format User List

function formatUserList(
  users: [string, number][]
): string[] {

  return users.map(
    ([name, age]) => `${name} (${age} years)`
  );
}

const users: [string, number][] = [
  ["Alice", 30],
  ["Bob", 25],
  ["Charlie", 28]
];

console.log(formatUserList(users));


// Challenge 3
// Find First Match

function findFirst(
  items: string[],
  searchTerm: string
): string | undefined {

  return items.find(
    item => item === searchTerm
  );
}

console.log(
  findFirst(
    ["apple", "banana", "orange"],
    "banana"
  )
);

console.log(
  findFirst(
    ["apple", "banana", "orange"],
    "grapes"
  )
);


