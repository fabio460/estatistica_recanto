import { Router } from "express";


const routeDefault = Router()
routeDefault.get('/',(req,res)=>{
    res.send("ok")
})

export default routeDefault