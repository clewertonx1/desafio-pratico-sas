import { Response, Request } from "express";
import { container } from "tsyringe";
import {FinishTestUseCase} from './FinishTestUseCase'

class FinishTestController{
  async handle(request: Request, Response: Response): Promise<Response>{
    const finishTestUseCase = container.resolve(FinishTestUseCase)
    const {studentId, simulatedId, testId} = request.body
    try{
      const test = await finishTestUseCase.execute({studentId, simulatedId, testId})
      return Response.status(201).json(test)
    }catch(error){
      console.log(error)
      return Response.status(400).json({error: error.message});      
    }
  }
}

export{FinishTestController}