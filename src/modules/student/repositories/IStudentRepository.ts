import { Student } from "../entities/Student";

interface ICreateStudentDTO{
  name: string,
}
interface IStudentRepository{
  create({name}: ICreateStudentDTO): Promise<Student>
  findById(id:number): Promise<Student>
  listAll(): Promise<Student[]>
  startSimulated({simulated, studentId}): Promise<Student>
  findByName(name): Promise<Student>
  findSimulatedInStudent({studentId, simulatedId})
  answerQuestion({studentId, simulatedId, testId,questId, response})
  checkAllQuestionHaveBeenAnswered({studentId, simulatedId, testId})
  calculateAndSaveTestScore({studentId, simulatedId,testId, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth})
  checkAllTestAlreadyDone({studentId, simulatedId})
  calculateAndSaveSimulatedScore({studentId, simulatedId})
  getRankingOfSimulated({simulatedId}): Promise<any>
}

export {ICreateStudentDTO, IStudentRepository}