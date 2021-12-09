import {Router} from 'express'
import { ListQuestionController } from '../modules/simulated/useCases/listAllQuestion/ListQuestController'
import {CreateQuestionController} from '../modules/simulated/useCases/createQuestion/CreateQuestionController'

const questionRoutes = Router()

const createQuestionController = new CreateQuestionController()
const listQuentionController = new ListQuestionController()

questionRoutes.post("/", createQuestionController.handle)

questionRoutes.get("/", listQuentionController.handle)

export {questionRoutes} 