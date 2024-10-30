// index.js

const fs = require('fs');
const path = require('path');

// Define the HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Page</title>
</head>
<body>
    <h1>Hello, this page was generated by Node.js!</h1>
    <p>This is a simple HTML file created by index.js</p>
</body>
</html>
`;

// Define the output path for index.html
const outputPath = path.join(__dirname, 'html', 'index.html');

// Ensure the directory exists, then write the file
fs.mkdir(path.dirname(outputPath), { recursive: true }, (err) => {
    if (err) throw err;
    
    // Write the HTML content to index.html
    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) throw err;
        console.log('index.html file has been generated successfully!');
    });
});



