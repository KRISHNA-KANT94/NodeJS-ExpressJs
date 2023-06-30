const express=require('express')
const routes=express.Router()
const connection=require('../db/dbconnect')



//get all employeess

routes.get('/employee',function(req,resp){
    connection.query('select * from employee',(err,data)=>{
        if(err){
            resp.status(500).send("cant fetch data"+ JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})


//add employee

routes.post('/employee',function(req,resp){
    var empid=req.body.empid
    var ename=req.body.ename
    var esal=req.body.esal

    connection.query('insert into employee values(?,?,?)',[empid,ename,esal],(err,result)=>{
        if(err){
            resp.status(500).send("cannot add employee"+JSON.stringify(err))
        }else{
            resp.redirect('/employee')
        }

    })
})


//update

routes.put('/employee/:empid',function(req,resp){
    var empid=req.params.empid
    var ename=req.body.ename
    var esal=req.body.esal

    connection.query("update employee set ename=?,esal=? where empid=?",[ename,esal,empid],(err,result)=>{

        if(err){
            resp.status(500).send("cannot add employee"+JSON.stringify(err))
        }else{
            resp.redirect('/employee')
        }
    })

})

//delete 

routes.delete('/employee/:empid',function(req,resp){
    connection.query('delete from employee where empid=?',[req.params.empid],(err,result)=>{
        if(err){
            resp.status(500).send("cannot add employee"+JSON.stringify(err))
        }else{
            resp.redirect('/employee')
        }
    })
})

//retrieve data by  empid

routes.get('/employee/:empid',function(req,resp){
    connection.query('select * from employee where empid=?',[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("cannot add employee"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})

module.exports=routes;