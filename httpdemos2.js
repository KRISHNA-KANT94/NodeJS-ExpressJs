const a = require('http')
const b = require('url')
var c = a.createServer(function (req, resp) {
    var d = b.parse(req.url, true)
    console.log(d)
    resp.writeHeader(200, { "content-type": "text/html" })
    switch (d.pathname) {

        case "/home":
            resp.write("hellooooo.....!!!!")
            resp.end()
            break;

        case "/aboutus":
            resp.write("guyssssss")
            resp.end()
            break;

        default:
            resp.write("kyun... hila dala naa..??")
            resp.end()
            break;
    }
  
})
c.listen(3002, console.log("maula... maula....maulaaaa"))
