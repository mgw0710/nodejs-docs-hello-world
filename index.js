const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Welcome to my website!<br/>");
    response.write("<a href='/.auth/login/microsoftaccount'>Log in with Microsoft Account</a>");
    response.end();

});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
