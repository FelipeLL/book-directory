import mongoose from "mongoose"
import Config from "../config/environment.js";

mongoose
    .connect(Config.mongoUri)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log("Database error: " + e))