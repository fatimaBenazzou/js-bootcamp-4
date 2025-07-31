import chalk from "chalk";
import fs from "fs";

// Read a file
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(chalk.blue("This is blue text"));
    console.log(chalk.green.bold("Success!"));
    console.log(chalk.red.bgWhite("Error!"));
});

// Write to a file
// fs.writeFile("example.txt", "Hello !", (err) => {
//     if (err) throw err;
//     console.log("File written successfully!");
// });
