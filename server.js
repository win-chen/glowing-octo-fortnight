const http = require('http');
const fs = require('fs');
const path = require('path');
const basePath = __dirname;

const HOST = '100.115.92.205';
const PORT = 1234;

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

const mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
};

const server = http.createServer(function(request, response) {
    const method = request.method;
    const url = request.url;

    if (method === 'GET') {
        let fileurl;
        if (request.url == '/') {
            fileurl = 'index.html';
        } else {
            fileurl = request.url;
        }
        let filepath = path.join(basePath, fileurl);
        let fileExt = path.extname(fileurl);
        let mimeType = mimeLookup[fileExt];

        if (!mimeType) {
        		console.log('Mimetype not found');
            send404(response);
            return;
        }

        fs.readFile(filepath, (err, data) => {
        	if (err) {
        		console.log('Error reading file: ', filepath);
        		console.log(err);
        		send404(response);
        		return;
        	}
        	console.log('Returning file: ', filepath);
		      response.writeHead(200, {'Content-Type': mimeType});
        	response.end(data);
        	return;
        })
    }
    else {
	    console.log('Not a GET');
	    send404(response); 
	    return;
	  }
})

console.log('Starting server@ ', 'http://' + HOST + ':' + PORT);
server.listen(PORT, HOST);