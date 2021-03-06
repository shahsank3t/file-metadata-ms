var multer = require('multer');
var express = require('express');
var app = express();

app.use(multer().single('fileToUpload'));

app.use(express.static(__dirname + '/WebContent'));

app.post('/upload', function(req, res) {
    // console.log(req.file);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.json({
    	fileName: req.file.originalname,
        fileSize: req.file.size + ' bytes'
    });
});

app.listen(8080);
