import express from "express"
import orderroute from "./routes/orders.routes.js"
const app = express()

app.use(express.json)
app.use("/",orderroute)

app.listen(8080,()=>{
    console.log("server running")
})