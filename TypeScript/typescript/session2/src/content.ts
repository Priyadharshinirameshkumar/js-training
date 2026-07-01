import { slugify, truncate } from "./helpers";

const slug = slugify("Hello World");

const short = truncate(
  "This is a long text",
  10
);

console.log(slug);
console.log(short);

/*
A .d.ts file is a TypeScript declaration file.

It contains type information for JavaScript code without
containing the actual implementation.

During migration, declaration files help TypeScript
understand the structure and types of existing JavaScript
libraries while allowing the codebase to gradually move
from JavaScript to TypeScript.
*/