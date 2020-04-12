module.exports = function(app, conn){
    app.get("/api/ping", (req,res)=>{
        return res.json({result : true});
    })
    app.post('/api/login', async (req,res)=>{
        console.log(req);
        var id = req.body.id;
        var pw = req.body.pw;
        let user = await conn.query("SELECT * FROM user WHERE user_id = ? AND pw = ?", [id, pw]);
        if(user.length > 0)
            res.json({result : true});
        else 
            res.json({result : false});
        return;
    });

    app.post('/api/AccountCheck' , async(req,res)=>{
        var id = req.body.id;
        let user = await conn.query("SELECT * FROM user WHERE user_id = ?", [id]);
        if(user.length > 0)
            res.json({result : true});
        else
            res.json({result : false});
    });
}