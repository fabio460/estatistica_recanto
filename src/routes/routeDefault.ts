import { Router } from "express";


const routeDefault = Router()
routeDefault.get('/',(req,res)=>{
    res.send("api rodando  ...")
})

export default routeDefault