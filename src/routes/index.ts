import { listar } from "../controllers/temporadaControler";
import { routesType } from "../types";
import routeDefault from "./routeDefault";
import temporadaRouter from "./temporadasRouter";

export const router:routesType[] = [
    {endpoint:"/",route:routeDefault},
    {endpoint:"/temporadas",route:temporadaRouter}
] 
