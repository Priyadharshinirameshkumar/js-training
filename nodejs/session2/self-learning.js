const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "async-output.txt");

async function fileDemo() {
    try {

        // Write to the file
        await fs.writeFile(
            filePath,
            "Hello from fs.promises!"
        );

        console.log("File written successfully.");

        // Read the file
        const data = await fs.readFile(
            filePath,
            "utf8"
        );

        console.log("File content:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

fileDemo();

const fsSync = require("fs");
const folderPath = __dirname;

console.log("\nJavaScript Files:");

const files = fsSync.readdirSync(folderPath);

files.forEach(file => {

    if (file.endsWith(".js")) {

        const stats = fsSync.statSync(
            path.join(folderPath, file)
        );

        console.log(
            `${file} - ${(stats.size / 1024).toFixed(2)} KB`
        );

    }

});