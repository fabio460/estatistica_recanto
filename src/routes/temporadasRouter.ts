import { Router } from "express";
import { listar } from "../controllers/temporadaControler";

const temporadaRouter = Router()
temporadaRouter.get('/',listar)

export default temporadaRouter