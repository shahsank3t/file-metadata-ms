var multer = require('multer');
var express = require('express');
var app = express();

app.use(multer({
    dest: './uploads/',
}).single('fileToUpload'));

app.use(express.static(__dirname + '/WebContent'));

app.post('/log', function(req, res) {
    // console.log(req.file);
    res.json({
    	fileName: req.file.originalname,
        fileSize: req.file.size + ' bytes'
    });
});

app.listen(8080);
