import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
   const l = await prisma.temporada.findMany()
   res.json(l)
}


export const estatistica = async(req:Request, res: Response)=>{
    let campeoes:string[] = []
    const lista = await prisma.temporada.findMany()
    let c = lista.map((elem:any)=>{
       return  elem.campeoe
    })
    let Campeoes = [...new Set(campeoes)]
    console.log(c)
    const l = await prisma.temporada.count({
        where:{
            campeao:"rafael"
        }
    })
    res.json(Campeoes)
}

export const deletar = async(req:Request, res: Response)=>{
    const {id} = req.params
    try {
        const l = await prisma.temporada.delete({
           where:{
            id
           }
        })
        res.json(l)
    } catch (error) {
        res.json(error)
    }
}

export const removerHistorico = async(req:Request, res: Response)=>{
    
    try {
        const temp = await prisma.temporada.findMany({
            orderBy:{
                data:'desc'
            },
            select:{
                id:true
            }
        })
        temp.map(async(elem:any)=>{           
            await prisma.temporada.delete({
               where:{
                id:elem.id
               }
            })
        })
        res.json("hitórico removido com sucesso")
    } catch (error) {
        res.json(error)
    }
}

export const criar = async(req:Request, res: Response)=>{
    const {campeao, artilheiro, assistecia, empates, gols, rodada, vitorias} = req.body
    try {
        const temp = await prisma.temporada.findFirst({
            orderBy:{
                data:'desc'
            },
            select:{
                rodada:true
            }
        })
        let Rodada = temp?.rodada || 0
        const l = await  prisma.temporada.create({
            data:{
              campeao,
              artilheiro,
              assistecia,
              rodada: Rodada + 1,
              data:new Date()
            }
        })
        res.json(l)
    } catch (error) {
        res.json(error)        
    }
 }