
import {container} from 'tsyringe'
import {QuestionRepository} from '../../modules/simulated/repotositories/implemations/QuestionRepository'
import {IQuestionRepository} from '../../modules/simulated/repotositories/IQuestionRepository'
import {TestRepository} from '../../modules/simulated/repotositories/implemations/TestRepository'
import {ITestRepository} from '../../modules/simulated/repotositories/ITestRepository'
import { ISimulatedRepository } from '../../modules/simulated/repotositories/ISimultedRepository'
import { SimulatedRepository } from '../../modules/simulated/repotositories/implemations/SimulatedRepository'
import { IStudentRepository } from '../../modules/student/repositories/IStudentRepository'
import { StudentRepository } from '../../modules/student/repositories/implemations/StudentRepository'

container.registerSingleton<IQuestionRepository>(
  "QuestionRepository",
  QuestionRepository
)
container.registerSingleton<ITestRepository>(
  "TestRepository",
  TestRepository
)
container.registerSingleton<ISimulatedRepository>(
  "SimulatedRepository",
  SimulatedRepository
)

container.registerSingleton<IStudentRepository>(
  "StudentRepository",
  StudentRepository
)



