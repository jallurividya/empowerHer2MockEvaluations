import express from "express"
import { readFileSync, writeFileSync } from "fs"
const router = express.Router()
function readData() {
    return JSON.parse(readFileSync("./db.json", "utf-8"))
}
function writeData(data) {
    writeFileSync("./db.json", JSON.stringify(data, null, 2))
}
router.post("/add", (req, res) => {
    const rawData = readData()
    const products = rawData.products
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const newProduct = {
        id: newId,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    }
    products.push(newProduct)
    writeData(rawData)
    res.json({
        message: "Product added successfully",
        data: newProduct
    })
})
router.get("/", (req, res) => {
    const rawData = readData()
    res.json(rawData.products)
})

router.put("/update/:id", (req, res) => {
    const id = Number(req.params.id)
    const { name, price, stock } = req.body
    const rawData = readData()
    if (!rawData.products) {
        return res.status(404).json({ message: "No products found" })
    }
    const products = rawData.products
    const index = products.findIndex(p => p.id === id)
    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        })
    }
    products[index] = {
        ...products[index],
        name: name ?? products[index].name,
        price: price !== undefined ? Number(price) : products[index].price,
        stock: stock !== undefined ? Number(stock) : products[index].stock
    }
    writeData(rawData)
    res.json({
        message: "Product updated successfully",
        data: products[index]
    })
})

export default router