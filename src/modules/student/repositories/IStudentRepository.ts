import { Student } from "../entities/Student";

interface ICreateStudentDTO{
  name: string,
}
interface IFinishSimulatedDTO{
  simulatedStudentId: string,
  studentId: number,
}

interface IStudentRepository{
  create({name}: ICreateStudentDTO): Promise<Student>
  findById(id:number): Promise<Student>
  listAll(): Promise<Student[]>
  startSimulated({simulated, studentId}): Promise<Student>
  findByName(name): Promise<Student>
  findSimulatedInStudent({studentId, simulatedId})
  finishSimulated({simulatedStudentId, studentId}: IFinishSimulatedDTO): Promise<Student>
  answerQuestion({studentId, simulatedId, testId,questId, response})
  checkAllQuestionHaveBeenAnswered({studentId, simulatedId})
}

export {ICreateStudentDTO, IStudentRepository, IFinishSimulatedDTO}