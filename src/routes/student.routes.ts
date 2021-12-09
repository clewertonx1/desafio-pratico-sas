import {Router} from 'express'
import { ListStudentController } from '../modules/student/useCases/ListAllStudents/ListStudentController'
import { CreateStudentControoler } from '../modules/student/useCases/CreateStudent/CreateStudentController'
import { StartSimualatedController } from '../modules/student/useCases/StartSimualated/StartSimualatedController'

const studentRoutes = Router()
const createStudentControoler = new CreateStudentControoler()
const listStudentController = new ListStudentController()
const startSimualatedController = new StartSimualatedController()

studentRoutes.post("/", createStudentControoler.handle)
studentRoutes.get("/", listStudentController.handle)
studentRoutes.post("/simulatedStart", startSimualatedController.handle)
export {studentRoutes} 