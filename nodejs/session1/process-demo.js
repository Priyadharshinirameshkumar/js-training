// Returns the installed Node.js version.
// Useful for checking compatibility with packages.
console.log("Node version:", process.version);

// Returns the operating system platform.
// Useful when writing code that behaves differently on Windows, Linux, or macOS.
console.log("Platform:", process.platform);

// Returns the current working directory from which Node.js is running.
// Useful for locating files and folders relative to the project.
console.log("Current directory:", process.cwd());

// Returns memory usage statistics of the current Node.js process.
// Useful for debugging memory leaks and monitoring application performance.
console.log("Memory usage:", process.memoryUsage());

// process.argv stores all command-line arguments passed to the program.
const args = process.argv;

// Displays the complete array of command-line arguments.
console.log("All arguments:", args);

// Displays only the first custom argument entered by the user.
console.log("Your input:", args[2]);

/*
Command-line arguments allow users to pass input to a program,
such as a file name, a username, or a report type, without changing the source code.
*/

// Returns the current environment 
console.log("NODE_ENV:", process.env.NODE_ENV);

// Returns the user's home directory.
console.log("HOME:", process.env.HOME || process.env.USERPROFILE);

/*
Environment variables are used to store sensitive information such as database URLs, API keys, passwords, and secret tokens.
Keeping them outside the source code improves security and allows different environments
Real applications store database URLs, API keys, passwords,
and secret tokens in environment variables because:
1. It keeps sensitive information out of the source code.
2. Secrets are not exposed if the code is shared on GitHub.
3. Different environments (development, testing, production)
   can use different values without modifying the code.

*/