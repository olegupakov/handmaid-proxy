var http = require("http");
var url = require("url");
var net = require('net');
var httpProxy = require("http-proxy");
var fs = require('fs');

//
// Create an HTTP proxy server with an HTTPS target
//
httpProxy.createProxyServer({
  target: {
    protocol: 'https:',
    host: 'censor.net.ua',
    port: 443,
    pfx: fs.readFileSync('path/to/certificate.p12'),
    passphrase: 'password',
  },
  changeOrigin: true,
}).listen(8000);