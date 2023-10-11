import http from 'http'
const server = http.createServer((req , res) => {
    res.statusCode = 404 // for changing status code
    res.statusMessage = "bad Network"
    res.setHeader('Content-Type', 'text/plain')
    res.end("hiiii");
    
})
const PORT = process.env.PORT || 3001
const HOST = 'localhost'
server.listen(PORT , HOST , () => {
    console.log("server runs at port no. - http://localhost:3001")
});

