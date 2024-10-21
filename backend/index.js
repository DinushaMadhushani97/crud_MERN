//import thr modules
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

//initialize the express app
const app = express();

//Creating a middleware - for passing the JSON request
app.use(bodyParser.json());

//Load environment variable from the dotenv file
dotenv.config();

//give default port
const PORT = process.env.PORT || 5000;

//Mongodb URL
const MONGOURL = process.env.MONGO_URL;

// connect with the Mongodb URL
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected Successfully")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error)=> console.log(error));

