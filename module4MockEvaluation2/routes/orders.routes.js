import express from "express"
const orderRoute = express.Router()
orderRoute.post("/add-order",(req,res)=>{
    res.json({message: "Order added successfully"})
})
orderRoute.get("/get-my-orders/:customerId",(req,res)=>{
    res.json({message: "Your order"})
})
orderRoute.put("/update-order/:orderId",(req,res)=>{
res.json({message: "Order Updated"})
})
orderRoute.delete("/delete-order/:orderId",(req,res)=>{
    res.json({message: "Order deleted"})
})
export default orderRoute