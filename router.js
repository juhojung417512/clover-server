module.exports = function(app, conn){
    app.get('/', async(req,res)=>{
        let asd = await conn.query("SELECT * FROM user WHERE user_id = ?", ["asdasd"]);
        console.log(asd[0]);
        res.send("INDEX");
    });
    app.post('/login', (req,res)=>{
        var id = req.body.id;
        var pw = req.body.pw;
        
        res.send(true);
    });
}