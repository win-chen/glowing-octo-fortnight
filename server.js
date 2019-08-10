const http = require('http');
const HOST = '100.115.92.205';
const PORT = 1234;

const server = http.createServer(function (request, response) {
 	
  // Send HTTP headers and body with status 200 (meaning success)
  console.log('Sending response');
  response.writeHead(200, {'Content-Type': 'text/html'});

  const url = request.url;
  // routes
  if (url === '/' || url === '/index.html') {
  	response.end(`
	    <html><body>
	      <h1>Hello, world!</h1>
	      You asked for: ${request.url}
	    </body></html>`);
  }
  else {
	 response.writeHead(200, {'Content-Type': 'text/html'});
	 response.end('Not found');
  }
})

console.log('Starting server@ ', 'http://'+HOST+':'+PORT);
server.listen(PORT, HOST);