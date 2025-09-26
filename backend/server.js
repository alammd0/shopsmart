import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDb from "./src/config/db.js";

const PORT = process.env.PORT || 5000;
connectDb();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});