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

const listarPorId = async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })

    return res.json(user)
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

const alterar = async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.update({
        where:{
            id
        }
    })

    return res.json(user)
}

const deletar = async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.delete({
        where: {
            id
        }
    })
    if (id != null) {
        res.send({
            message: "Usuário deletado com sucesso!",
            user: user
        })
    } else {
        res.send({ message: "Usuário não encontrado!" })
    }

}


const usuarioController = {
    listar,
    listarPorId,
    criar,
    alterar,
    deletar
}

export default usuarioController