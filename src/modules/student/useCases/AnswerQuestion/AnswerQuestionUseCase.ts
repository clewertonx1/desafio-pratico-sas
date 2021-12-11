import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  studentId: number,
  simulatedId: string,
  testId: string,
  questId: string,
  response: string
}

@injectable()
class AnswerQuestionUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository
  ){}
  async execute({studentId, simulatedId, testId, questId, response}: IRequest):Promise<Student>{

    if(!studentId){
      throw new Error("studentId cannot be null")
    }
    if(!simulatedId){
      throw new Error("simuletedId cannot be null")
    }
    if(!testId){
      throw new Error("testId cannot be null")
    }
    if(!questId){
      throw new Error("questionId cannot be null")
    }
    if(!response){
      throw new Error("response cannot be null")
    }

    const studentAlreadyExist = await this.studentRepository.findById(studentId)

    if(!studentAlreadyExist){
      throw new Error("Student not exist")
    }
 
    const student = await this.studentRepository.answerQuestion({studentId, simulatedId, testId, questId, response})
    return student
  }
}

export{AnswerQuestionUseCase}