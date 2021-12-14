import { Response, Request } from "express";
import { container } from "tsyringe";
import {GetRankingUseCase} from './GetRankingUseCase'

class GetRankingController{
  async handle(request: Request, response: Response): Promise<Response>{
    const getRankingUseCase = container.resolve(GetRankingUseCase)
    const {simulatedId} = request.params
    try{
      const ranking = await getRankingUseCase.execute({simulatedId})
      return response.status(201).json(ranking)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});      
    }
  }
}

export{GetRankingController}