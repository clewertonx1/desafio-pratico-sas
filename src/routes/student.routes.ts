import {Router} from 'express'
import { ListStudentController } from '../modules/student/useCases/ListAllStudents/ListStudentController'
import { CreateStudentControoler } from '../modules/student/useCases/CreateStudent/CreateStudentController'
import { StartSimualatedController } from '../modules/student/useCases/StartSimualated/StartSimualatedController'
import { AnswerQuestionController } from '../modules/student/useCases/AnswerQuestion/AnswerQuestionController'
import { FinishSimulatedController } from '../modules/student/useCases/FinishSimulated/FinishSimulatedController'
import { FinishTestController } from '../modules/student/useCases/FinishTest/FinishTestController'
import { GetRankingController } from '../modules/student/useCases/GetRanking/GetRankingController'

const studentRoutes = Router()
const createStudentControoler = new CreateStudentControoler()
const listStudentController = new ListStudentController()
const startSimualatedController = new StartSimualatedController()
const answerQuestionController = new AnswerQuestionController
const finishSimulatedController = new FinishSimulatedController()
const finishTestController = new FinishTestController()
const getRankingController = new GetRankingController()

studentRoutes.post("/", createStudentControoler.handle)
studentRoutes.get("/", listStudentController.handle)
studentRoutes.post("/simulatedStart", startSimualatedController.handle)
studentRoutes.post("/finishTest", finishTestController.handle)
studentRoutes.post("/finishSimulated", finishSimulatedController.handle)
studentRoutes.post("/answerQuestion", answerQuestionController.handle)
studentRoutes.get("/getRankingOfSimulated/:simulatedId", getRankingController.handle)
export {studentRoutes} 