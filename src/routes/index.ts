import {Router} from 'express'
import {questionRoutes} from "./question.routes"
import { simulatedRoutes } from './simulated.routes'
import { testRoutes } from './test.routes'
import { studentRoutes } from './student.routes'
const router = Router()

router.use("/question", questionRoutes)
router.use("/test", testRoutes)
router.use("/simulated", simulatedRoutes)
router.use("/student", studentRoutes)

export {router}
