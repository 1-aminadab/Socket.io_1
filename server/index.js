const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const http = require("http")
const {Server} = require("socket.io")

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]
    }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("send_message",(data)=>{
    console.log(data);
  })
})

server.listen(5000, ()=>{
    console.log("Server is running at port 5000...");
})
