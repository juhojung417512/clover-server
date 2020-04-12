const express = require("express");

var app = express();
const MYSQL = require("./mysql_conn");
const config = require("./config.json");
const conn = new MYSQL(config.host, config.user, config.password, config.database);
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
const router = require("./router")(app,conn);

app.get('/', async(req,res)=>{
    res.send("INDEX");
});

var server = app.listen(3000, function(){
    console.log("on : 3000");
});