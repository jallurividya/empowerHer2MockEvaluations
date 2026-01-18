import express from "express"
import { readFileSync, writeFileSync } from "fs"
const router = express.Router()
function readData(){
    JSON.parse(readFileSync("./db.json","utf-8"))
}
function writeData(data){
    writeFileSync("./db.json", JSON.stringify(data, null, 2))
}
router.post("/add",(req,res)=>{

})
router.get("/",(req,res)=>{
    
})

export default router