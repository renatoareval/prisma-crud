import expres from "express"

import usuarioController from "../controllers/UsuarioController.js"


const usuariosRoutes = expres.Router()


usuariosRoutes
    .get('/usuarios', usuarioController.listar)
    .post('/usuarios', usuarioController.criar)



export default usuariosRoutes