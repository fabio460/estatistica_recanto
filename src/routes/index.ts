import { listar } from "../controllers/temporadaControler";
import { routesType } from "../types";
import temporadaRouter from "./temporadasRouter";

export const router:routesType[] = [
    {endpoint:"/temporadas",route:temporadaRouter}
] 
