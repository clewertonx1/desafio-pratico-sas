import { Response, Request } from "express";
import { container } from "tsyringe";
import {ListAllSimulatedUseCase} from './ListAllSimulatedUseCase'

class ListAllSimulatedController{
  async handle(request: Request, response: Response): Promise<Response>{
    const listAllSimulatedUseCase = container.resolve(ListAllSimulatedUseCase)
    try{
      const simulateds = await listAllSimulatedUseCase.execute()
      return response.status(201).json(simulateds)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{ListAllSimulatedController}