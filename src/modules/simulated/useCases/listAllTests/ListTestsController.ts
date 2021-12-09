import { Response, Request } from "express";
import { container } from "tsyringe";
import {ListTestsUseCase} from './ListTestsUseCase'

class ListTestsController{
  async handle(request: Request, response: Response): Promise<Response>{
    const listTestsUseCase = container.resolve(ListTestsUseCase)
    try{
      const tests = await listTestsUseCase.execute()
      return response.status(201).json(tests)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message}); 
    }
  }
}

export{ListTestsController}