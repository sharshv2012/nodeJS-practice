import http from 'http'
import fs from 'fs'
const server = http.createServer((req , res) => {
    
    if(req.url == '/'){
       const data =  fs.readFileSync("./Public/home.html")
        //we are using readFileSync because we are reading the file synchronously
        //if we use readFile then it will read the file asynchronously
        //we need to use readFile when we are reading a large file
       console.log(req.url)
       console.log(req.method)
       console.log(req.headers)
       res.writeHead(200 , {"Content-Type" : "text/html"}) // to tell the browser that the content is of type html i.e. header
       // content type matters, if I change it to text/plain then the html code will be displayed.
       res.write(data) // to write the response to the client
       res.end() // to send the response to the client, if we don't send the response then the client will keep loading
       //res.end is different from res.write because res.end sends the response to the client and stops the server from running
    }else if(req.url == '/about'){
        const d =  fs.readFileSync("./Public/about.html")
        res.end(d)
    }else if(req.url == '/contact'){
        const da =  fs.readFileSync("./Public/contact.html")
        res.end(da)
    }else{
        res.end("<h1>404 Page Not Found! :(</h1>");
    }

    // the main problem with this code is that we have to write the code for each and every route
    // to solve this problem we can use express.js
    // for instance if we have many resourcess like styles.css, about.html, contact.html, home.html etc then we have to write the code for each and every resource

    
})
const PORT = process.env.PORT || 3002
const HOST = 'localhost'
server.listen(PORT , HOST , () => {
    console.log("server runs at port no. - http://localhost:3002")
});


