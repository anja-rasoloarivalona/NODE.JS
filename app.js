const http = require('http');


const server = http.createServer((req, res) => {
   // console.log(req);
   res.setHeader('Content-type', 'text/html');
   res.write('<html>');
   res.write('<head><title>My first page</title></head>');
   res.write('<body><h1>My first page</h1></body>');
   res.write('</html>');
});

server.listen(3000);