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
router.patch("/orders/change-status/:orderId", (req, res) => {
    const orderId = Number(req.params.orderId)
    const { status } = req.body
    const validFlow = ["placed", "shipped", "delivered"]
    if (!status || !validFlow.includes(status)) {
        return res.status(400).json({
            message: "Invalid status value"
        })
    }
    const rawData = readData()
    rawData.orders = rawData.orders || []
    const orders = rawData.orders
    const order = orders.find(o => o.id === orderId)
    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        })
    }
    if (order.status === "cancelled") {
        return res.status(400).json({
            message: "Cannot change status of a cancelled order"
        })
    }
    if (order.status === "delivered") {
        return res.status(400).json({
            message: "Order already delivered"
        })
    }
    const currentIndex = validFlow.indexOf(order.status)
    const newIndex = validFlow.indexOf(status)
    if (newIndex !== currentIndex + 1) {
        return res.status(400).json({
            message: `Invalid status transition from ${order.status} to ${status}`
        })
    }
    order.status = status
    writeData(rawData)
    res.status(200).json({
        message: "Order status updated successfully",
        data: order
    })
})
router.delete("/orders/:orderId", (req, res) => {
    const orderId = Number(req.params.orderId)
    const rawData = readData()
    rawData.orders = rawData.orders || []
    rawData.products = rawData.products || []
    const orders = rawData.orders
    const products = rawData.products
    const order = orders.find(o => o.id === orderId)
    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        })
    }
    if (order.status === "cancelled") {
        return res.status(400).json({
            message: "Order is already cancelled"
        })
    }
    const today = new Date().toISOString().split("T")[0]
    const orderDate = order.createdAt.split("T")[0]
    if (orderDate !== today) {
        return res.status(400).json({
            message: "Order can be cancelled only on the same day"
        })
    }
    const product = products.find(p => p.id === order.productId)
    if (!product) {
        return res.status(404).json({
            message: "Associated product not found"
        })
    }
    product.stock += order.quantity
    order.status = "cancelled"
    writeData(rawData)
    res.status(200).json({
        message: "Order cancelled successfully",
        data: order
    })
})

export default router