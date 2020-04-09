const express = require("express");

var app = express();
const MYSQL = require("./mysql_conn");
const config = require("./config.json");
const conn = new MYSQL(config.host, config.user, config.password, config.database);
app.use(express.json());
const router = require("./router")(app,conn);

var server = app.listen(3000, function(){
    console.log("on : 3000");
})