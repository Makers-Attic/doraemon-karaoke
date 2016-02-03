var http = require('http');
var port = process.env.PORT || 1337;


var shareData = {
    SleepMode: false,
    PeopleClosed: false,
    Scolling: false,
    MovieUrl: ""
};

http.createServer(function(req, res) {
    var responseText = 
        JSON.stringify(shareData);
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(responseText);    
}).listen(port);

