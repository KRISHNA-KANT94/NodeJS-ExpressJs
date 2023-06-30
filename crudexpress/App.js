const express=require('express')
const app=express()
const bodyparse=require('body-parser')
const route=require('./router/router')


app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','content-type')
    res.setHeader('Access-Control-Allow-Credentials',true)
    next()
})

app.use("/",route)

app.listen(3305,function(){
    console.log("server connection established on port no 3005")
})
module.exports=app