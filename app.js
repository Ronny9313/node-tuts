const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end(`Welcome to Home Page`);
    } else if (req.url == "/about") {
        res.end(`This is our About Page`);
    } else {
        res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find what you are looking for</p>
    <a href="/">Back to Home</a>
    `);
    }
});

server.listen(5002, () => console.log("Server running!!!"));
