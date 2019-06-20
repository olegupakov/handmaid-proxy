var http = require("http");
var url = require("url");
var net = require('net');
var httpProxy = require("http-proxy");
var fs = require('fs');

var utilUrl = require("./utilurl");

//var stream = fs.createWriteStream("proxy.log", {flags:'a'});

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url);
  var target = urlObj.protocol + "//" + urlObj.host;

  if (utilUrl.isRejected(urlObj.host)) {
//    console.log("Rejected HTTP request for: ", urlObj.host);
//    res.write("HTTP/" + req.httpVersion + " 500 Connection error\r\n\r\n");
    res.write("HTTP/" + req.httpVersion + " 204 No Content\r\n\r\n");
    res.end();
  } else {
    console.log("http://" + urlObj.host);

    var proxy = httpProxy.createProxyServer({});

    proxy.on("error", function (err, req, res) {
      console.log("proxy error", err);
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });    
      res.end('Something went wrong. And we are reporting a custom error message.');
//      res.status(500).write(err.Error);
//      res.write("Content-Type: text/plain; charset=utf-8\r\n");
//      res.end();
    });

    proxy.web(req, res, {target: target});
  }
}).on('error', (err) => {
  // handle errors here
 // console.log('ERR MY: ', err);
  //throw err;
}).listen({
  host: 'localhost',
  port: 7000,
  exclusive: true
});  //this is the port your clients will connect to

server.addListener('connect', function (req, socket, bodyhead) {
  var hostPort = utilUrl.getHostPortFromString(req.url, 443);
  var hostDomain = hostPort[0];
  var port = parseInt(hostPort[1]);

  if (utilUrl.isRejected(hostDomain)) {
//    console.log("Rejected HTTPS request for: ", hostDomain);
//    socket.write("HTTP/" + req.httpVersion + " 500 Connection error\r\n\r\n");
    socket.write("HTTP/" + req.httpVersion + " 204 No content\r\n\r\n");
    socket.end();
  } else {
    console.log("https://" + hostDomain);

    var proxySocket = new net.Socket({allowHalfOpen:true});

    proxySocket.connect(port, hostDomain, function () {
    //    stream.write(req.url + "\n");
//        console.log('connect');
        proxySocket.write(bodyhead);
        socket.write("HTTP/" + req.httpVersion + " 200 Connection established\r\n\r\n");
  //      console.log('connect end');
      }
    );

    proxySocket.on('data', function (chunk) {
  //    stream.write(chunk);
  //    console.log("data ", req.url);
//      console.log("proxySocket.data");
  //    console.log("socket.connecting=",socket.connecting);
      try {
        socket.write(chunk);
      } catch(e) {
          console.log('try/catch proxy data:',e);
      }
//      console.log("proxySocket.data end");
    });

    proxySocket.on('end', function () {
//      console.log("proxySocket.end");
  //    console.log("socket.connecting=",socket.connecting);
      try {
        socket.end();
      } catch(e) {
          console.log('try/catch proxy end:',e);
      }
    //  console.log("proxySocket.end end");
    });

    proxySocket.on('finish', () => {
//      console.log("proxySocket.finish");
      try {
        socket.destroy();
      } catch(e) {
          console.log('try/catch proxy finish:',e);
      }
    });

    proxySocket.on('error', function () {
//      console.log("Event Error on proxySocket: ", req.url);
  //    console.log("socket.connecting=",socket.connecting);
      try {
        socket.write("HTTP/" + req.httpVersion + " 500 Connection error\r\n\r\n");
        socket.end();
      } catch(e) {
          console.log('try/catch proxy error:',e);
      }
    //  console.log("error.end end");
    });

     proxySocket.on('timeout', function(){
        console.log("proxySocket.timeout!");
      //Your Code Here
  //    console.log("socket.disconnect end");
     });

    socket.on('data', function (chunk) {
//      console.log("socket.on data");
  //    console.log("proxySocket.connecting=",proxySocket.connecting);
      try {
        proxySocket.write(chunk);
      } catch(e) {
          console.log('try/catch data:',e);
      }
    //  console.log("socket.on data end");
    });

    socket.on('end', function () {
//      console.log("socket.end");
  //    console.log("proxySocket.connecting=",proxySocket.connecting);
      try {
        proxySocket.end();
      } catch(e) {
          console.log('try/catch end:',e);
      }
//      console.log("socket.end end");
    });                                 

    socket.on('finish', () => {
//      console.log("socket.finish");
      try {
        proxySocket.destroy();
      } catch(e) {
          console.log('try/catch finish:',e);
      }
    });

    socket.on('error', function () {
  //    console.log("Event Error on socket: ", req.url);
//      console.log("proxySocket.connecting=",proxySocket.connecting);
   //   proxySocket.end();                                    
      try {
        proxySocket.destroy();
      } catch(e) {
          console.log('try/catch error:',e);
      }
//      console.log("socket.error end");
    });

     socket.on('timeout', function(){
        console.log("socket.timeout!");
      //Your Code Here
  //    console.log("socket.disconnect end");
     });

  };
});
