// create http server in node.js
const http=require('http')
const fs=require('fs')
console.log('helloWorld')

//using http to start the server http
const server=http.createServer(async(req,res)=>{
if(req.url=='/hello'){
    res.end('hello  students from server')
}
else if(req.url=='/welcome'){
   const msg=await fs.readFileSync('./files/welcome.txt')
   res.end(msg)
}
else{
    res.writeHead(500)
    res.end('server doesnt know how to react')
}
})

// bind server to a port

server.listen(3000,()=>{
    console.log('node.js server started in port no:3000')
})

