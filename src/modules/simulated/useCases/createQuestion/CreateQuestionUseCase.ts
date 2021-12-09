import { Question } from "../../entities/question";
import { IQuestionRepository } from "../../repotositories/IQuestionRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  questionStatement: string,
  correctAnswer:string,
  dificulty: string
}

@injectable()
class CreateQuestionUseCase{
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ){}
  async execute({questionStatement, correctAnswer, dificulty}: IRequest):Promise<Question>{
    if(!questionStatement){
      throw new Error("questionStatement cannot be null")
    }
    const questionAlreadyExist = await this.questionRepository.findByStatament(questionStatement)
    if(questionAlreadyExist){
      throw new Error("The question statament must be unique")
    }
    const question = await this.questionRepository.create({questionStatement, correctAnswer, dificulty})
    return question
  }
}

export{CreateQuestionUseCase}