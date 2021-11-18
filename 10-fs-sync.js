const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first + " " + second);

// If file not present, node will create a new file
// If file is present, node will overwrite the content of the file
// For appending to file, use flag: "a"
writeFileSync(
    "./content/resultSync.txt",
    `Here is the result: ${first} and ${second}`,
    { flag: "a" }
);
console.log("done with task");
