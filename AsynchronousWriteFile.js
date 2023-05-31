const d=require('fs')
d.writeFile('xyz.txt',"hello world",function(err){
    if(err){
        console.log(" error")
    }else
        d.readFile('xyz.txt',function(err,data){
            if(err){
                console.log("error occured")
            }else{
                console.log(data.toString())
            }
        })
})

d.writeFileSync('xyz.txt',"welcome to file")
var g=d.readFileSync('xyz.txt')
console.log(g.toString())
