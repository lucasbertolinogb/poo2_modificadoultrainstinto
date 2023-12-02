import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserController{
    constructor(){}

    async listUsuarios(req: Request, res: Response){
        const users = await prisma.usuario.findMany()
        res.render('users', {users: users})
    }

    async createUsuarios(req: Request, res: Response){
        try{
        const { nome,email,matricula,tipoUsuario } = req.body; 

        const novaLinha = await prisma.usuario.create({
        data: {
            nome,
            email,
            matricula,
            tipoUsuario,
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

    async deleteUsuarios(req: Request, res: Response){
        try{
            const {id} = req.body
            const delet = await prisma.usuario.delete({
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

    async updateUsuarios(req: Request, res: Response){
        try{
            const { id, nome, email, tipoUsuario } = req.body
            //pode mudar tanto pelo email como pelo id 
            if(email){
            const upadateEmail = await prisma.usuario.update({
                where: { email }, //necessita de email para mudar
                data: {
                  nome: nome,
                  email: email,
                  tipoUsuario: tipoUsuario,
                },
              });
            return res.json({sucesso: 'atualizado'})
            }
            if (id){
            const upadateId = await prisma.usuario.update({
                where: { id }, //necessita de email para mudar
                data: {
                    nome,
                    email,
                    tipoUsuario,
                },
              });
            }
        }catch(error){
            console.error('erro: ', error)
            res.json({
                error
            })
        }
    }
}

export default new UserController()