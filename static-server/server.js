var express = require('express');
var app = express();
app.use('/public', express.static('public'));
app.listen(8002, 'localhost', () => {
    console.log("static server starting");
})
