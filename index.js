const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Define the HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Generated Page</title>
</head>
<body>
    <h1>Hello from Node.js on Docker!</h1>
    <p>This HTML file was generated and served by a Node.js application.</p>
</body>
</html>
`;

// Define the output path for index.html
const outputPath = path.join(__dirname, 'index.html');

// Write the HTML content to index.html
fs.writeFile(outputPath, htmlContent, (err) => {
    if (err) {
        console.error('Error writing to index.html:', err);
    } else {
        console.log('index.html file has been generated successfully!');
    }
});

// Create an HTTP server to serve the index.html file
const server = http.createServer((req, res) => {
    fs.readFile(outputPath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});







