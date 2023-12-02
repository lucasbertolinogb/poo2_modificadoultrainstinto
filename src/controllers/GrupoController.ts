import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GrupoController{
    constructor(){}

    async listGrupos(req: Request, res: Response){
        const users = await prisma.grupo.findMany()
        res.render('grupos', {users: users})
    }

    async createGrupo(req: Request, res: Response){
        try{
        const { nome,liderNome,estande,diaApresentacao } = req.body; 

        const novaLinha = await prisma.grupo.create({
        data: {
            nome,
            liderNome,
            estande,
            diaApresentacao
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
    async deleteGrupo(req: Request, res: Response){
        try{
            const {id} = req.body
            const delet = await prisma.grupo.delete({
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

    async updateGrupo(req: Request, res: Response){
        try{
            const { id, nome, liderNome, estande, diaApresentacao } = req.body
            const update = await prisma.grupo.update({
                where: { id },
                data: {
                  nome: nome,
                  liderNome: liderNome,
                  estande: estande,
                  diaApresentacao: diaApresentacao
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

export default new GrupoController();