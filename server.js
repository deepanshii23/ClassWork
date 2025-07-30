var express=require('express');
var app=express();

var port=80; // default protocol for http
app.use(express.static('frontend'));
app.listen(port, function(){
    console.log("Server is running on http://localhost:"+port);
});