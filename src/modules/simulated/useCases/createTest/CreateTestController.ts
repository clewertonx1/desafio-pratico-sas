import { Response, Request } from "express";
import { container } from "tsyringe";
import {CreateTestUseCase} from './CreateTestUseCase'

class CreateTestController{
  async handle(request: Request, response: Response): Promise<Response>{
    const createTestUseCase = container.resolve(CreateTestUseCase)
    const {name, questions = []} = request.body
    try{
      const test = await createTestUseCase.execute({name, questions})
      return response.status(201).json(test)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{CreateTestController}