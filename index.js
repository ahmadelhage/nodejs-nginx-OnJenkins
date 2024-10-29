const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const urlPath = req.url;

  // Serve the index.html file for the root path
  if (urlPath === "/" || urlPath === "/index.html") {
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } 
  // Overview page
  else if (urlPath === "/overview") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Welcome to the "overview page" of the nginX project');
  } 
  // API endpoint
  else if (urlPath === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        product_id: "xyz12u3",
        product_name: "NginX injector",
      })
    );
  } 
  // Handle 404 for other paths
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Start the server
server.listen(3000, "localhost", () => {
  console.log("Listening for requests on http://localhost:3000");
});


