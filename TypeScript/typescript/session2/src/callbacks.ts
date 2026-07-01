// Task A

type Predicate<T> = (value: T) => boolean;

type Transform<T, U> = (value: T) => U;

type EventHandler = (
  eventName: string,
  payload: unknown
) => void;


// Task B

function filter<T>(
  items: T[],
  predicate: Predicate<T>
): T[] {
  return items.filter(predicate);
}

function transform<T, U>(
  items: T[],
  fn: Transform<T, U>
): U[] {
  return items.map(fn);
}


// Event Handler Example

const handleEvent: EventHandler = (
  eventName,
  payload
) => {
  console.log(`Event: ${eventName}`);
  console.log(payload);
};

handleEvent("userLogin", {
  username: "Alice"
});


// Task C

const numbers = [1, 2, 3, 4, 5];

// Filter even numbers

const evenNumbers = filter(
  numbers,
  (num) => num % 2 === 0
);

console.log(evenNumbers);


// Transform numbers to strings

const numberStrings = transform(
  numbers,
  (num) => num.toString()
);

console.log(numberStrings);

/*
Predicate<T>:
Represents a function that returns true or false.

Transform<T, U>:
Represents a function that converts one type into another.

EventHandler:
Represents a function used to handle events with a name and payload.
*/