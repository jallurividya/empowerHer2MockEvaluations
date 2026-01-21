import express from "express"
import { readFileSync, writeFileSync } from "fs"
const router = express.Router()
function readData() {
    return JSON.parse(readFileSync("./db.json", "utf-8"))
}
function writeData(data) {
    writeFileSync("./db.json", JSON.stringify(data, null, 2))
}
router.post("/orders", (req, res) => {
    const { productId, quantity } = req.body
    if (!productId || !quantity) {
        return res.status(400).json({
            message: "productId and quantity are required"
        })
    }
    const rawData = readData()
    rawData.orders = rawData.orders || []
    rawData.products = rawData.products || []
    const product = rawData.products.find(
        p => p.id === Number(productId)
    )
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }
    const orders = rawData.orders
    const orderId =
        orders.length > 0 ? orders[orders.length - 1].id + 1 : 1
    const totalAmount = product.price * Number(quantity)
    const newOrder = {
        id: orderId,
        productId: product.id,
        quantity: Number(quantity),
        totalAmount,
        status: "placed",
        createdAt: new Date().toISOString()
    }
    orders.push(newOrder)
    writeData(rawData)
    res.status(201).json({
        message: "Order placed successfully",
        data: newOrder
    })
})
router.get("/orders", (req, res) => {
    const rawData = readData()
    res.status(200).json(rawData.orders || [])
})
router.patch("/change-status/:orderId", (req, res) => {
    const orderId = Number(req.params.orderId)
    const { status } = req.body
    const rawData = readData()
    const orders = rawData.orders || []
    const order = orders.find(o => o.id === orderId)
    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        })
    }
    order.status = status
    writeData(rawData)
    res.json({
        message: "Order status updated",
        data: order
    })
})
export default router