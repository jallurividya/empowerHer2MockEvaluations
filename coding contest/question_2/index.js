import express from "express"
import OrderRouter from "./routes/orders.routes.js"
import ProductRouter from "./routes/products.routes.js"
import AnalyticsRouter from "./routes/analytics.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/products",ProductRouter)
app.use("/orders", OrderRouter)
app.use("/analytics", AnalyticsRouter)

app.listen(port, ()=>{
    console.log("server running...")
})