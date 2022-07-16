import express from "express"
import Config from "./config/environment.js"
import bookRoute from "./routes/bookRoute.js"
import "./db/connection.js"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use("/", bookRoute)


const PORT = Config.port || 5000
app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
})

