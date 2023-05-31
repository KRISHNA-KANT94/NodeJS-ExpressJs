const d=require('fs')
d.writeFile('xyz.txt',"Lakhon mile.. koi bhi na tumsa mila..",function(err){
    if(err){
        console.log("aa gaya na error")
    }else
        d.readFile('xyz.txt',function(err,data){
            if(err){
                console.log("tera deedar huaa.. pehla sa pyaar hua")
            }else{
                console.log(data.toString())
            }
        })
})

d.writeFileSync('xyz.txt',"bhul gaya jag saara tere naal pyaar hai")
var g=d.readFileSync('xyz.txt')
console.log(g.toString())