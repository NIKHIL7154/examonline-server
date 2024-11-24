import express from "express"
import connect from "./config/db"
import "dotenv/config"

const PORT = process.env.PORT || 3000;
const app=express()
connect()
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})