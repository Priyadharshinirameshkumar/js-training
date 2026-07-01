// Function 1

function getFirstWord(sentence: string | null): string {

  if (sentence === null) {
    return "";
  }

  return sentence.split(" ")[0];  //'sentence' is possibly 'null'
}


//If sentence is null and we try to call split() on it,the application will crash with a runtime error because null does not have a split() method.
//function 2

function getUserAge(
  user: { name: string; age?: number }
): string {

  if (user.age === undefined) {
    return `${user.name}'s age is not available`;
  }

  return `${user.name} is ${user.age.toString()} years old`;  //'user.age' is possibly 'undefined'
}
//If age is undefined and we try to call toString() on it,the application will crash because undefined does not have a toString() method.
//Function 3


const config = {
  database: {
    host: "localhost",
    port: 5432
  }
};

function getDbPort(): number {

  if (!config.database) {
    return 0;
  }

  return config.database.port;
}


//If the database configuration is missing and we try to access database.port, the application may throw an error because we are accessing a property on an undefined object.
// Function 4
const users = ["Alice", "Bob", "Charlie"];

function findUser(name: string): string {

  const found = users.find(
    user => user === name
  );

  if (found === undefined) {
    return "User not found";
  }

  return found.toUpperCase();  //'found' is possibly 'undefined'
}

/*
Array.find() may return undefined when no matching user exists.

If we call toUpperCase() directly on undefined,the application will crash with a runtime error.
*/