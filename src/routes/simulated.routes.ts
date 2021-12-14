import {Router} from 'express'
import { ListAllSimulatedController } from '../modules/simulated/useCases/listAllSimulated/ListAllSimulatedController'
import { CreateSimulatedController } from '../modules/simulated/useCases/createSimulated/CreateSimulatedController'
import { ListSimulatedByIdController } from '../modules/simulated/useCases/listSimulatedById/ListSimulatedByIdController'
import { AddTestToSimulatedController } from '../modules/simulated/useCases/addTestToSimulated/AddTestToSimulatedController'

const simulatedRoutes = Router()

const createSimulatedController = new CreateSimulatedController()
const listAllSimulatedController = new ListAllSimulatedController()
const listSimulatedByIdController = new ListSimulatedByIdController()
const addTestToSimulatedController = new AddTestToSimulatedController()

simulatedRoutes.post("/", createSimulatedController.handle)
simulatedRoutes.get("/", listAllSimulatedController.handle)
simulatedRoutes.get("/:id", listSimulatedByIdController.handle)
simulatedRoutes.post("/addTest", addTestToSimulatedController.handle)

export {simulatedRoutes} 