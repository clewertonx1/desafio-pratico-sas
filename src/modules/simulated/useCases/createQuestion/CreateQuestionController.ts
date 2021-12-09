import { Response, Request } from "express";
import { container } from "tsyringe";
import {CreateQuestionUseCase} from './CreateQuestionUseCase'

class CreateQuestionController{
  async handle(request: Request, response: Response): Promise<Response>{
    const createQuestionUseCase = container.resolve(CreateQuestionUseCase)
    const {questionStatement, correctAnswer, dificulty} = request.body
    try{
      const question = await createQuestionUseCase.execute({questionStatement, correctAnswer, dificulty})
      return response.status(201).json(question)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{CreateQuestionController}