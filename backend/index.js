const express=require("express")
const env=require("dotenv")
require("dotenv").config()
const connection=require("./config/db")

const app=express()

app.use(express.json())
app.get("/",(req,res)=>{
    res("Welcome to Smashbath an shopping app")
})

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connection to server success")
    } catch (error) {
        console.log(error);
        console.log("connection failed")
    }
})