import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'
import { ISimulatedRepository } from "../../../simulated/repotositories/ISimultedRepository";

interface IRequest {
  simulatedId: string
}

@injectable()
class GetRankingUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository,
  ){}
  async execute({simulatedId}: IRequest):Promise<any>{

    if(!simulatedId){
      throw new Error("simulatedId cannot be null")
    }

    const studetsOrderByScore = await this.studentRepository.getRankingOfSimulated({simulatedId})

    return {
      "1": studetsOrderByScore[0] ? studetsOrderByScore[0].name : null,
      "2": studetsOrderByScore[1] ? studetsOrderByScore[1].name : null,
      "3": studetsOrderByScore[2] ? studetsOrderByScore[2].name : null,
      "4": studetsOrderByScore[3] ? studetsOrderByScore[3].name : null,
      "5": studetsOrderByScore[4] ? studetsOrderByScore[4].name : null,
      
    }
  }
}

export{GetRankingUseCase}