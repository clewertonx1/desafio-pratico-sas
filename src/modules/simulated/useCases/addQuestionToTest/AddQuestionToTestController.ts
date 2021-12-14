import { Response, Request } from "express";
import { container } from "tsyringe";
import {AddQuestionToTestUseCase} from './AddQuestionToTestUseCase'

class AddQuestionToTestController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {testId, questionId} = request.body
    const addQuestionToTestUseCase = container.resolve(AddQuestionToTestUseCase)
    try{
      const tests = await addQuestionToTestUseCase.execute({testId, questionId})
      return response.status(201).json(tests)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message}); 
    }
  }
}

export{AddQuestionToTestController}