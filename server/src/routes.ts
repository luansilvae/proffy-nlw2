import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionController'

const routes = express.Router()

const classesController = new ClassesController()
const connectionController = new ConnectionController()

// rota de criação de aula
routes.post('/classes', classesController.create)

// rota de listagem de aulas
routes.get('/classes', classesController.index)

// rota de listagem de conexões
routes.get('/connections', connectionController.index)

// rota de criação de conexões
routes.post('/connections', connectionController.create)

export default routes