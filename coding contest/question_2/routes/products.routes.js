import express from "express"
import { readFileSync, writeFileSync } from "fs"
const router = express.Router()
function readData(){
    return JSON.parse(readFileSync("./db.json","utf-8"))
}
function writeData(data){
    writeFileSync("./db.json", JSON.stringify(data, null, 2))
}
router.post("/add",(req,res)=>{
    const rawData = readData()
    const products = rawData.products
    const newId = products.length>0 ? products[products.length-1].id+1:1;
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
        data : newProduct
    })
})
router.get("/",(req,res)=>{
    const rawData = readData()
    res.json(rawData.products)
})

export default router