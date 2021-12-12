import { Response, Request } from "express";
import { container } from "tsyringe";
import {FinishSimulatedUseCase} from './FinishSimulatedUseCase'

class FinishSimulatedController{
  async handle(request: Request, Response: Response): Promise<Response>{
    const finishSimulatedUseCase = container.resolve(FinishSimulatedUseCase)
    const {studentId, simulatedId} = request.body
    try{
      const test = await finishSimulatedUseCase.execute({studentId, simulatedId})
      return Response.status(201).json(test)
    }catch(error){
      console.log(error)
      return Response.status(400).json({error: error.message});      
    }
  }
}

export{FinishSimulatedController}