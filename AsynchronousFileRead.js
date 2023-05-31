const a=require('fs')
a.readFile('abc.txt',function(err,data){
    if(err){
        console.log("got damn error")
    }
    else{
        console.log(data.toString())
    }
})

a.readFile('jkl.txt',function(err,data){
    if(err){
        console.log("again err man...!!!")
    }else{

        console.log(data.toString())
    }
})

console.log("hello dosto")
var c=a.readFileSync('xyz.txt')
console.log(c.toString());
console.log("yahoooo....!!!!")
