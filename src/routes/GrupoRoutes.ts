import { Router } from "express";
import GrupoController from "../controllers/GrupoController";


const GrupoRouter = Router();

GrupoRouter.get('/grupo', GrupoController.listGrupos)

GrupoRouter.post('/grupo', GrupoController.createGrupo)

GrupoRouter.delete('/grupo', GrupoController.deleteGrupo)

GrupoRouter.put('/grupo', GrupoController.updateGrupo)

export default GrupoRouter;