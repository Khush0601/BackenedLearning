
const express=require('express')
const app=express()


app.get('/',(req,res)=>{
   res.status(200).send('hello khush')
})
app.post('/',(req,res)=>{
    res.status(200).send('hello shanu')
 })
 


app.listen(7777,()=>{
    console.log('node.js server started in port no:7777')
})


























//  when there is need then see this
// // create http server in node.js
// const http=require('http')
// const fs=require('fs')
// console.log('helloWorld')

// //using http to start the server http
// const server=http.createServer(async(req,res)=>{
// if(req.url=='/hello'){
//     res.end('hello  students from server')
// }
// else if(req.url=='/welcome'){
//    const msg=await fs.readFileSync('./files/welcome.txt')
//    res.end(msg)
// }
// else{
//     res.writeHead(500)
//     res.end('server doesnt know how to react')
// }
// })





