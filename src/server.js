import express from "express"
import "dotenv/config"
import connectDB from "./config/db.js"
import morgan from "morgan"
import librosRouter from "./routers/libros.js"


const server = express()
const host = process.env.HOST
const port = process.env.PORT 


connectDB()

//midleware
server.use(express.json())
server.use(morgan("dev"))
server.use("/libros", librosRouter)


server.get("/", (req, res)=>{
res.status(204).send()
})




server.listen(port, ()=>{
    console.log(`server is running at ${host} in port ${port}`);
})