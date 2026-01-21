import express from "express"
import { readFileSync, writeFileSync } from "fs"
const router = express.Router()
function readData(){
    JSON.parse(readFileSync("./db.json","utf-8"))
}
function writeData(data){
    writeFileSync("./db.json", JSON.stringify(data, null, 2))
}
router.get("/allorders",(req,res)=>{

})
router.get("/cancelled-orders",(req,res)=>{

})
router.get("/shipped",(Req,res)=>{

})
router.get("/total-revenue/:productId",(req,res)=>{

})
router.get("/alltotalrevenue",(req,res)=>{
    
})
export default router