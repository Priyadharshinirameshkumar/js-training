const os = require("os");

// Returns the operating system platform
console.log("Platform:     ", os.platform());

// Returns the CPU architecture
console.log("Architecture: ", os.arch());

// Returns the computer's hostname
console.log("Hostname:     ", os.hostname());

// Returns the current user's home directory
console.log("Home dir:     ", os.homedir());

// Returns the number of CPU cores
console.log("CPU cores:    ", os.cpus().length);

// Returns total memory in MB
const totalMB = Math.round(os.totalmem() / 1024 / 1024);

// Returns free memory in MB
const freeMB = Math.round(os.freemem() / 1024 / 1024);

// Displays free and total memory
console.log(`Memory: ${freeMB}MB free of ${totalMB}MB`);

// Get the operating system platform
const platform = os.platform();

// Check which operating system is running
if (platform === "win32") {
  console.log("Running on Windows");
} else if (platform === "darwin") {
  console.log("Running on Mac");
} else {
  console.log("Running on Linux");
}

// Calculate percentage of free memory
const freePercent = Math.round((os.freemem() / os.totalmem()) * 100);

// Check if memory is low
if (freePercent < 20) {
  console.log("Warning: Low memory —", freePercent + "% free");
} else {
  console.log("Memory OK —", freePercent + "% free");
}

/*
Real-world example:
A Node.js application may check the platform to run platform-specific commands.
For example, a file backup application can use different commands for Windows, Linux, and macOS.
It can also check available memory before processing large files or videos to avoid running out of memory.
*/