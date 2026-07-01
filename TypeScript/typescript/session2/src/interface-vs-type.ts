// 1. API Pagination Response
// Using an interface because it represents an object shape and can be extended later if needed.

interface PaginationResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  data: T[];
}

const usersResponse: PaginationResponse<string> = {
  page: 1,
  pageSize: 10,
  total: 100,
  data: ["Alice", "Bob"]
};

// 2. String OR Array of Strings
// Using a type because this is a union type.

type StringOrStringArray = string | string[];

let tags: StringOrStringArray = "typescript";
tags = ["typescript", "javascript"];

// 3. Notification Shape

// Using an interface because notifications may be extended into EmailNotification, PushNotification, etc.

interface Notification {
  id: string;
  message: string;
}

interface EmailNotification extends Notification {
  emailAddress: string;
}

interface PushNotification extends Notification {
  deviceToken: string;
}


// 4. Callback Function Type
// Using a type because function signatures are commonly represented using type aliases.

type NumberProcessor = (value: number) => void;

const processNumber: NumberProcessor = (value) => {
  console.log(value);
};

processNumber(10);

// 5. HTTP Methods
// Using a type because this is a union of fixed values.

type HttpMethod = | "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

let method: HttpMethod = "GET";
