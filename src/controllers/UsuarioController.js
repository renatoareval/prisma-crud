import { prisma } from '../config/prismaClient.js'
import express from 'express'

const listar = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.send(users)
    } catch (err) {
        console.error(err);
        return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
    }
}



const criar = async (req, res) => {

    const { name, email } = req.body

    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })



    return res.json(user)
}


const usuarioController = {
    listar,
    criar
}

export default usuarioController