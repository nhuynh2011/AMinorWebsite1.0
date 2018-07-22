var http = require('http')
var url = require('url')
//var date = require('./testmodule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    // res.write(req.url + "\n")
    // res.write("The date and time are: " + date.dateTime() + "\n")
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month
    res.end(txt);
}).listen(8080);
