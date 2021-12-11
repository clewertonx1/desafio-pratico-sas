import { Student } from "../entities/Student";

interface ICreateStudentDTO{
  name: string,
}
interface IFinishSimulatedDTO{
  simulatedStudentId: string,
  tests: [
    testId: string,
    studentResponses: [
      questId: string,
      response: string,
    ]
  ]
}

interface IStudentRepository{
  create({name}: ICreateStudentDTO): Promise<Student>
  findById(id:number): Promise<Student>
  listAll(): Promise<Student[]>
  startSimulated({simulated, studentId}): Promise<Student>
  findByName(name): Promise<Student>
  findSimulatedInStudent({studentId, simulatedId})
  finishSimulated({simulatedStudentId, tests}: IFinishSimulatedDTO): Promise<Student>
  answerQuestion({studentId, simulatedId, testId,questId, response})
}

export {ICreateStudentDTO, IStudentRepository, IFinishSimulatedDTO}