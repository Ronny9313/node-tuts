const http = require("http");

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("response", (name, age) => {
    console.log(`Data received: ${name} is ${age} years old`);
});

event.emit("response", "John", 34);

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("response generated");
    res.end("Welcome");
});

server.listen(5001);
