var exports = {};

var url = require('url');

var newHeaders = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      newHeaders["Access-Control-Allow-Origin"] = "*";
      newHeaders["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      newHeaders["Access-Control-Allow-Credentials"] = false;
      newHeaders["Access-Control-Max-Age"] = '86400'; // 24 hours
      newHeaders["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";


var headers = newHeaders;


exports.requestHandler = function(request, response) {

  if (url.parse(request.url).pathname !== '/client') {
    response.writeHead(404, headers);
    console.log('404 is hittin!');
    response.end();
  }

  if (request.method === "GET") {
    //response.write(JSON.stringify(data), 'utf-8');
    headers['dataType'] = 'json';
    response.writeHead(200, headers)
    response.write(JSON.stringify(storage), 'utf8');
    response.end();
  }

  if (request.method === 'OPTIONS') {
    response.writeHead(200, headers);
    response.end();
  }
  // console.log(storage.results);


  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  //console.log(request);
  console.log("Serving request type " + request.method + " for url " + request.url);

  // The outgoing status.
  //var statusCode = 200;
  // console.log(request.statusCode);
  // See the note below about CORS headers.

  // console.log(request.method);

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  // newHeaders['Content-Type'] = "application/json";

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  //response.writeHead(statusCode, headers);

  //response.write(JSON.stringify(storage), 'utf8')
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.

  //response.end(" Hello, World!");
};