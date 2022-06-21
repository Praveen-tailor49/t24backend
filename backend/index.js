import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoute from "./routes/product.js"
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb.");
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDb disconnected");
})

app.use(cors())
app.use(express.json());
app.use("/api", productRoute)

app.listen(8800, ()=> {
    connect()
    console.log("Connected to backend");
})