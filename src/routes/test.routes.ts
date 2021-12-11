import {Router} from 'express'
import { ListTestsController } from '../modules/simulated/useCases/listAllTests/ListTestsController'
import { CreateTestController } from '../modules/simulated/useCases/createTest/CreateTestController'
import { AddQuestionToTestController } from '../modules/simulated/useCases/addQuestionToTest/AddQuestionToTestController'
import { ListTemplateTestController } from '../modules/simulated/useCases/listTestById/ListTestByIdController'

const testRoutes = Router()

const createTestController = new CreateTestController()
const listTestsController = new ListTestsController()
const addQuestionToTestController = new AddQuestionToTestController()
const listTemplateTestController = new ListTemplateTestController()

testRoutes.post("/", createTestController.handle)
testRoutes.get("/", listTestsController.handle)
testRoutes.get("/:id", listTemplateTestController.handle)
testRoutes.post("/addQuestion", addQuestionToTestController.handle)
export {testRoutes} 