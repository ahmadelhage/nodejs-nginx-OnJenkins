const http = require("http");
const fs = require("fs");
const path = require("path");
const fs = require("fs");

const htmlContent = `<html><body><h1>Hello from Node.js</h1></body></html>`;
fs.writeFileSync("/app/index.html", htmlContent);
// Path where the HTML file will be created
const htmlFilePath = path.join(__dirname, 'index.html');

// Function to create the index.html file
function createHtmlFile() {
  const htmlContent = `
    <html>
      <head>
        <title>Node.js Server</title>
      </head>
      <body>
        <h1>Welcome to the Node.js Server</h1>
        <p>This HTML file was generated by the Node.js application.</p>
      </body>
    </html>
  `;

  fs.writeFile(htmlFilePath, htmlContent, (err) => {
    if (err) {
      console.error("Error creating index.html:", err);
    } else {
      console.log("index.html has been created!");
    }
  });
}

// Create the HTML file when the server starts
createHtmlFile();

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === "/overview") {
    res.end('Welcome to the "overview page" of the NginX project');
  } else if (urlPath === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        product_id: "xyz12u3",
        product_name: "NginX injector",
      })
    );
  } else {
    res.end("Successfully started a server");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on http://localhost:3000");
});

