const sql=require('mysql')

const myconnection=sql.createConnection({
    "user":"root",
    "password":"root123",
    "port":3306,
    "database":"end",
    "host":"127.0.0.1"
})

myconnection.connect((err)=>{
    if(err){
        console.log("connection established failed"+JSON.stringify(err))
    }else{
        console.log("connection established")
    }
})

module.exports=myconnection;