const http = require("http");
const host = '192.168.0.103';
const port = 1488;

// const requestListener = function (req, res) {
//  let header = req.headers['user-agent'];
//  console.log("text here ", header);
//  res.setHeader("Content-Type", "text/html; charset=utf-8");
//  res.setHeader("Slava-sovetam", "Hello wolrd");
//  res.writeHead(200);
//  res.end("My first server!");

// };

let fs = require('fs');
const requestListener = function (req, res) {
 let path = req.url.substring(1)
 console.log(path)
 let file_html = fs.readFileSync(path);
 res.end(file_html)
}
/*
let fs = require('fs');
let file_html = fs.readFileSync('index.html', 'utf8');
let file_js = fs.readFileSync('app.js', 'utf8');
let file_css = fs.readFileSync('style.css', 'utf8');
let file_png = fs.readFileSync('mem.png');



const requestListener = function (req, res) {
 if (req.url.endsWith('.html')) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(file_html);
 } else if (req.url.endsWith('.css')) {
  res.setHeader("Content-Type", "text/css")
  res.end(file_css)
 } else if (req.url.endsWith('.js')) {
  res.setHeader("Content-Type", "application/x-javascript:")
  res.end(file_js)
 } else if (req.url.endsWith('.png')) {
  res.setHeader("Content-Type", "image/png");
  res.end(file_png)
 } else if (req.url.includes('.send')) {
  req.on('data', (chunk) => {
   console.log('CHUNK', chunk);
  })
  console.log('URL', req.url);
  res.end('')
 } else {
  res.writeHead(404)
  res.end('')
 }
 }
 */




const server = http.createServer(requestListener);
server.listen(port, host, () => {
 console.log(`Server is running on http://${host}:${port}`);
});