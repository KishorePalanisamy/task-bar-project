const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");

require('dotenv').config();
const app=express();
const PORT=process.env.PORT;
const con=process.env.CONNECTION_STRING;

app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}));
 app.use(express.json());

app.get("/",(request,response)=>{
    response.send("Hey server");
})

app.post("/post",(request,response)=>{
    const{name,place}=request.body;
    console.log("<><>",name,place);
    response.send("Hey i am the server");
})
app.listen(6969,()=>{
    console.log("Server listening in port");
}) 


mongoose.connect("mongodb+srv://kishore:Student@123@mernstackdb.xaeovkr.mongodb.net/")
.then(()=>{
    console.log("Successful");
})
.catch((err)=>{
    console.log(err);
})       