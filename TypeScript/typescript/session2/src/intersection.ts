type Identifiable = {
  readonly id: string;
};

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type SoftDeletable = {
  deletedAt?: Date;
  isDeleted: boolean;
};



type BaseRecord = Identifiable & Timestamped;

type UserRecord = BaseRecord & {
  name: string;
  email: string;
};

type AuditedUserRecord = UserRecord & SoftDeletable;

function isDeleted(record: SoftDeletable): boolean {
  return record.isDeleted;
}


const baseRecord: BaseRecord = {
  id: "REC001",
  createdAt: new Date(),
  updatedAt: new Date()
};


// UserRecord

const userRecord: UserRecord = {
  id: "USR001",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "Alice",
  email: "alice@example.com"
};


// AuditedUserRecord

const auditedUser: AuditedUserRecord = {
  id: "USR002",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "Bob",
  email: "bob@example.com",
  isDeleted: true,
  deletedAt: new Date()
};

console.log(isDeleted(auditedUser));

/*
type A = {
  value: string;
};

type B = {
  value: number;
};

type C = A & B;

const test: C = {
  value: "hello"   //Type 'string' is not assignable to type 'never'
};

const test: C = {
  value: 10
};   //Type 'number' is not assignable to type 'never'

When two intersected types contain the same property name
with different types, TypeScript combines them using an intersection.

In this example, the type becomes:

value: string & number

Since a value cannot be both a string and a number at the same time,
TypeScript reduces the type to 'never'.

As a result, it is impossible to create a valid object of that type.
*/