import { Response, Request } from "express";
import { container } from "tsyringe";
import {CreateSimulatedUseCase} from './CreateSimulatedUseCase'

class CreateSimulatedController{
  async handle(request: Request, response: Response): Promise<Response>{
    const createSimulatedUseCase = container.resolve(CreateSimulatedUseCase)
    const {name, tests = []} = request.body
    try{
      const simulated = await createSimulatedUseCase.execute({name, tests})
      return response.status(201).json(simulated)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{CreateSimulatedController}