import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/aval', AvaliacaoController.listAvaliacao)

AvaliacaoRouter.post('/aval', AvaliacaoController.createAvaliacao)

AvaliacaoRouter.delete('/aval', AvaliacaoController.deleteAval)

AvaliacaoRouter.put('/aval', AvaliacaoController.updateAval)

export default AvaliacaoRouter;