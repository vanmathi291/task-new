// import express from "express";
// file accessing packages

// import * as fs from 'fs'; 
const express = require ("express")
const fs = require("fs")
const path = require("path");
// path
const dirPath = path.join(__dirname,"timestamps");
console.log("dirPath",dirPath)

// initializing express server
const app = express()

// middlewars
app.use(express.static("timestamps"))

// api's

app.get("/",(req,res)=>{
    res.send("working fine")
})
app.get ("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3);
    let content = `Last updated timestamp is ${dateString}`
    

fs.writeFileSync(`${dirPath}/date-time.txt`,content,(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("file created")
    }
   })
res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))
})

app.listen(9000,()=>console.log(`server started in localhost:9000`));

