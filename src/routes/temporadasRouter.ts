import { Router } from "express";
import { criar, deletar, estatistica, listar, removerHistorico } from "../controllers/temporadaControler";

const temporadaRouter = Router()
temporadaRouter.get('/',listar)
temporadaRouter.post('/',criar)
temporadaRouter.delete('/:id', deletar)
temporadaRouter.delete('/', removerHistorico)
temporadaRouter.get('/estatistica', estatistica)
export default temporadaRouter