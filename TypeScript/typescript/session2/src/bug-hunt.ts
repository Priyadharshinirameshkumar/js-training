export {};

interface Product {
  id: string;
  name: string;
  price: number;
  tags: string[];
  discount?: number;
}

// Bug 1


function applyDiscount(product: Product): number {
  return product.price - (product.discount ?? 0);  //before fix:Object is possibly 'undefined'
}


//If discount is undefined, subtracting it from price would result in NaN (Not a Number), leading to incorrect calculations.


// Bug 2

function getTagSummary(product: Product): string {  
  return product.tags.join(", ").toUpperCase();  //before fix : Property 'toUppercase' does not exist on type 'string'
}


//The method name was misspelled as toUpperCase(). At runtime, JavaScript would throw an error because that method does not exist.



// Bug 3

function createProduct(
  name: string, //Parameter 'name' implicitly has an 'any' type

  price: number//Parameter 'price' implicitly has an 'any' type
): Product {
  return {
    id: Math.random().toString(),
    name: name,
    price: price,
    tags: []
  };
}

/*Without parameter types, TypeScript would infer 'any' (or report an error in strict mode). This could allow
invalid values such as strings for price, causing bugs later.
*/


// Bug 4

function findCheapest(
  products: Product[]
): Product | undefined {

  const sorted = [...products].sort(
    (a, b) => a.price - b.price
  );

  return sorted[0];
}

/*
If the products array is empty, sorted[0] will be undefined.Returning Product directly would be incorrect and could
cause runtime errors when accessing properties.
*/

// Bug 5

function printProduct(product: Product): void {   
  console.log(
    `${product.name} costs ${product.price}`  //before fix : Type 'string' is not assignable to type 'void'
  );
}

/*
A function with return type void should not return a value.

Returning product.name would violate the function contract
and cause a TypeScript error.
*/


// Testing

const product1: Product = {
  id: "P001",
  name: "Laptop",
  price: 50000,
  tags: ["electronics", "computer"],
  discount: 5000
};

const product2: Product = {
  id: "P002",
  name: "Mouse",
  price: 1000,
  tags: ["accessories"]
};

console.log(applyDiscount(product1));

console.log(getTagSummary(product1));

console.log(createProduct("Keyboard", 2000));

console.log(findCheapest([product1, product2]));

printProduct(product1);

/*
TypeScript helps identify potential bugs before the code runs.

By checking optional values, method names, function parameters,array access, and return types, it prevents many common runtime errors and makes the code safer and easier to maintain.
*/