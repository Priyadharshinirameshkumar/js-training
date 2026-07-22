// Import fs.promises
const fs = require("fs").promises;

async function fileOperations() {
    try {
        // Write a file
        await fs.writeFile(
            "nodejs/session1/async-output.txt",
            "Hello from fs.promises!"
        );

        // Read the file
        const content = await fs.readFile(
            "nodejs/session1/async-output.txt",
            "utf8"
        );

        console.log("File Content:", content);

        // Append data
        await fs.appendFile(
            "nodejs/session1/async-output.txt",
            "\nThis line was appended using async/await."
        );

        // Read updated content
        const updated = await fs.readFile(
            "nodejs/session1/async-output.txt",
            "utf8"
        );

        console.log("Updated Content:");
        console.log(updated);

    } catch (error) {

        console.log(error);

    }
}

fileOperations();
/*
__dirname
Returns the absolute path of the current folder.
__filename
Returns the absolute path of the current file.
These variables are available in CommonJS modules.
They are not available in ES Modules because ES Modules
use import/export syntax.

import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
*/

const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

rl.question("Enter your name: ", function (name) {

    console.log(`Hello, ${name}!`);

    rl.close();

});