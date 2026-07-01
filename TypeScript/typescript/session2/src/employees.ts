// Step 1: Base Person Interface

interface Person {
  firstName: string;
  lastName: string;
  email: string;
}


// Step 2: Employee Interface

interface Employee extends Person {
  readonly employeeId: string;
  department: string;
  startDate: Date;
}


// Step 3: Manager Interface

interface Manager extends Employee {
  teamSize: number;
  directReports: string[];
}


// Step 4: Function to Get Full Name

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}


// Step 5: Function to Introduce Employee

function introduceEmployee(employee: Employee): string {
  return `Hi, I am ${getFullName(employee)} from ${
    employee.department
  }, joined on ${employee.startDate.toLocaleDateString()}`;
}


// Person Object

const person: Person = {
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice@example.com"
};


// Employee Object

const employee: Employee = {
  firstName: "Bob",
  lastName: "Smith",
  email: "bob@example.com",
  employeeId: "EMP001",
  department: "Engineering",
  startDate: new Date("2024-01-01")
};


// Manager Object

const manager: Manager = {
  firstName: "Charlie",
  lastName: "Brown",
  email: "charlie@example.com",
  employeeId: "MGR001",
  department: "Engineering",
  startDate: new Date("2023-01-01"),
  teamSize: 5,
  directReports: ["EMP001", "EMP002", "EMP003"]
};


// Testing getFullName with all three types

console.log(getFullName(person));
console.log(getFullName(employee));
console.log(getFullName(manager));


// Testing Employee Introduction

console.log(introduceEmployee(employee));
console.log(introduceEmployee(manager));


/*
getFullName accepts Person objects, but it also works with Employee
and Manager objects because both interfaces extend Person.

Employee inherits all properties from Person, and Manager inherits
all properties from Employee. Therefore, Employee and Manager
contain everything required by the Person interface.
*/