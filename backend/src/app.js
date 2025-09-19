import express from "express";
// import connectDb from "./config/db.js";

const app = express();

app.use(express.json());
// connectDb();c

app.get("/" , (req, res) => {
    res.send("Hello World");
})

export default app;