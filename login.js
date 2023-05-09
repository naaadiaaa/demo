import express from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv"
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongodbConnectionUrl);
 

const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './htmlfolders');
app.listen(process.env.port,()=>{
    console.log(`start application on http://localhost${process.env.port}`)
})