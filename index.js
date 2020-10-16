const http = require('http')
const fs = require('fs')


const port = process.env.PORT || 1337

    fs.readFile('./public/index.html', function (err, html) {
        if (err) {
            throw err 
        }   
    http.createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(html)
        response.end()
    }).listen(port)

})


console.log("Server running at http://localhost:%d", port)
