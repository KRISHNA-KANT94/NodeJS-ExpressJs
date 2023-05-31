const a=require('fs')
a.readFile('abc.txt',function(err,data){
    if(err){
        console.log(" error")
    }
    else{
        console.log(data.toString())
    }
})

a.readFile('jkl.txt',function(err,data){
    if(err){
        console.log("error")
    }else{

        console.log(data.toString())
    }
})

console.log("hello world")
var c=a.readFileSync('xyz.txt')
console.log(c.toString());
console.log("hello")
