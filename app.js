const express = require("express");
const bodyParser = require("body-parser");

var app = express();
const MYSQL = require("./mysql_conn");
const config = require("./config.json");
const conn = new MYSQL(config.host, config.user, config.password, config.database);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = require("./router")(app,conn);

app.get('/', async(req,res)=>{
    res.send("INDEX");
});

var server = app.listen(3000, function(){
    console.log("on : 3000");
});