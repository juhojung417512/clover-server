module.exports = function(app, conn){
    app.get("/ping", (req,res)=>{
        return res.send(true);
    })
    app.post('/login', (req,res)=>{
        var id = req.body.id;
        var pw = req.body.pw;
        let user = await conn.query("SELECT * FROM user WHERE user_id = ? AND pw = ?", [id, pw]);
        if(user.length > 0)
            res.json({result : true});
        else 
            res.json({result : false});
        return;
    });
}