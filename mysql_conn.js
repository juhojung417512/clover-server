const _mysql = require("mysql2/promise");

class MYSQL{
    constructor(host, user, password, database){
        this.pool = _mysql.createPool({
            host : host,
            user : user,
            password: password,
            database : database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async query(sql, args,){
        while(1){
            let conn = await this.pool.getConnection();
            try{
                const [rows, fields] = await conn.query(sql, args);
                conn.release();
                return rows;
            }catch(err){
                console.log("err.message", err.errno);
                if(err.errno == "ECONNRESET"){
                    await new Promise(r=>setTimeout(r,1000))
                }else{
                    throw err
                }
            }
        }
    }
    
}

module.exports = MYSQL