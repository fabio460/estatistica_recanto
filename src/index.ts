import express from "express";
import cors from 'cors'
import { router } from "./routes";
const app =  express()
app.use(cors())
app.use(express.json())
router.forEach(elem=>{
    return app.use(elem.endpoint, elem.route)
})
app.listen(4000,()=>console.log("rodando na porta 4000 ..."))