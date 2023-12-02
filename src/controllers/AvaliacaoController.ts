import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class AvaliacaoController{
    constructor(){}

    async listAvaliacao(req: Request, res: Response){
        const users = await prisma.avaliacao.findMany()
        res.render('aval', {users: users} )
    }


    async createAvaliacao(req: Request, res: Response){
        try{
        const { nota,usuarioId,grupoId } = req.body; 

        const novaLinha = await prisma.avaliacao.create({
        data: {
            nota,
            usuarioId,
            grupoId,
        },
        });
        res.json({
            novaLinha
        })
    }
    catch(error){
        console.error('Erro : ', error);
        res.json({
            error
        })
    }
    }
    async deleteAval(req: Request, res: Response){
        try{
            const {id} = req.body
            const delet = await prisma.avaliacao.delete({
                where:{
                    id
                }
            })
            return res.json({sucesso: 'deletado'})
        }catch(error){
            console.error('erro: ', error)
            res.json({
                error
            })
        }
    }

    async updateAval(req: Request, res: Response){
        try{
            const { id, nota, usuarioId, grupoId } = req.body
            const update = await prisma.avaliacao.update({
                where: { id },
                data: {
                    nota: nota,
                    usuarioId: usuarioId,
                    grupoId: grupoId
                },
              });
            return res.json({sucesso: 'atualizado'})
        }catch(error){
            console.error('erro: ', error)
            res.json({
                error
            })
        }
    }
}

export default new AvaliacaoController()