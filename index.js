import express from "express"
import 'dotenv/config'
import bookRoute from "./src/routes/bookRoute.js"


const app = express()

app.use("/", bookRoute)


app.listen(process.env.PORT, () => {
    console.log("server listening on port " + process.env.PORT);
})