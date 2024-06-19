import express from "express";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import dotenv from "dotenv";
import connectToMongoDB from "../db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//     res.send("Hello from server");
// });

app.use(express.json()); //to parse the incoming requests with JSON payloads (fron req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, ()=>{
    connectToMongoDB();
    `Server is running on port ${PORT}`
});