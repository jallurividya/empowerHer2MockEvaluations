import express from "express"
import orderRoute from "./routes/orders.routes.js"
const app = express()

app.use(express.json)
app.use("/orders",orderRoute)

app.listen(8080,()=>{
    console.log("server running")
})