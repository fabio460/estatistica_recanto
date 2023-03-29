import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()
export const listar = async(req:Request, res: Response)=>{
   const l = await prisma.temporada.findMany()
   res.json(l)
}