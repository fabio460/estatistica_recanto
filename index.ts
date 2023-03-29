import express from "express";
import cors from 'cors'
import { router } from "./src/routes";
const app =  express()
app.use(cors())
app.use(express.json())
// router.forEach(elem=>{
//     return app.use(elem.endpoint, elem.route)
// })
app.get("/",(req,res)=>{
   res.send("olaaa")
})
app.listen(4000,()=>console.log("rodando na porta 4000 ..."))