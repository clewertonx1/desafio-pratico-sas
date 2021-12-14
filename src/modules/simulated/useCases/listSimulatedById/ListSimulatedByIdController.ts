import { Response, Request } from "express";
import { container } from "tsyringe";
import {ListSimulatedByIdUseCase} from './ListSimulatedByIdUseCase'

class ListSimulatedByIdController{
  async handle(request: Request, response: Response): Promise<Response>{

    const listSimulatedByIdUseCase = container.resolve(ListSimulatedByIdUseCase)
    const {id} = request.params
    try{
      const simulated = await listSimulatedByIdUseCase.execute(id)
      return response.status(200).json(simulated)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});
      
    }
  }
}

export{ListSimulatedByIdController}