import { Response, Request } from "express";
import { container } from "tsyringe";
import {AddTestToSimulatedUseCase} from './AddTestToSimulatedUseCase'

class AddTestToSimulatedController{
  async handle(request: Request, response: Response): Promise<Response>{
    const addTestToSimulatedUseCase = container.resolve(AddTestToSimulatedUseCase)
    const {testId, simulatedId} = request.body
    try{
      const simulated = await addTestToSimulatedUseCase.execute({testId, simulatedId})
      return response.status(201).json(simulated)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{AddTestToSimulatedController}