// Task A — Type Narrowing

function describe(
  value: string | number | boolean | null
): string {
  if (value === null) {
    return "No value provided";
  }
  if (typeof value === "string") {
    return `String of length ${value.length}: ${value}`;
  }
  if (typeof value === "number") {
    return `Number: ${value.toFixed(2)}`;
  }

  return `Boolean: ${value}`;
}
console.log(describe("TypeScript"));
console.log(describe(12.4567));
console.log(describe(true));
console.log(describe(null));

// Task B — Cat and Dog
interface Cat {
  meow(): void;
}
interface Dog {
  bark(): void;
}
function makeSound(animal: Cat | Dog): void {
  if ("meow" in animal) {
    animal.meow();
  } else {
    animal.bark();
  }
}
const cat: Cat = {
  meow() {
    console.log("Meow!");
  }
};
const dog: Dog = {
  bark() {
    console.log("Woof!");
  }
};
makeSound(cat);
makeSound(dog);

// Task C — Summary Function
function summarise(
  input: string | number[] | { label: string }
): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  }
  if (Array.isArray(input)) {
    return `Array contains ${input.length} numbers`;
  }
  return `Object label: ${input.label}`;
}
console.log(summarise("Hello"));
console.log(summarise([1, 2, 3, 4]));
console.log(summarise({ label: "Important" }));

/*
Discriminated Union Example

interface CatAnimal {
  kind: "cat";
  meow(): void;
}

interface DogAnimal {
  kind: "dog";
  bark(): void;
}

type Animal = CatAnimal | DogAnimal;

function makeAnimalSound(animal: Animal): void {

  if (animal.kind === "cat") {
    animal.meow();
  } else {
    animal.bark();
  }
}

Discriminated unions are more reliable because they use a dedicated property (kind) to identify the exact type.

With the 'in' operator, TypeScript checks whether a property exists, but discriminated unions make the intent clearer and are easier to maintain in larger applications.
*/


