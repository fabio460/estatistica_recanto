import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
   const l = await prisma.temporada.findMany()
   res.json(l)
}
export const criar = async(req:Request, res: Response)=>{
    const {campeao, artilheiro, assistecia, empates, gols, rodada, vitorias} = req.body
    try {
        const l = await  prisma.temporada.create({
            data:{
              campeao,
              artilheiro,
              assistecia,
              empates,
              gols,
              rodada,
              vitorias,
              data:new Date()
            }
        })
        res.json(l)
    } catch (error) {
        res.json(error)        
    }
 }