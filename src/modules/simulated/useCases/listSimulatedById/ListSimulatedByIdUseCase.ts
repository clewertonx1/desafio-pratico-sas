import { Simulated } from "../../entities/Simulated";
import { ISimulatedRepository } from "../../repotositories/ISimultedRepository";

import {inject, injectable} from 'tsyringe'

@injectable()
class ListSimulatedByIdUseCase{
  constructor(
    @inject("SimulatedRepository")
    private simulatedRepository: ISimulatedRepository
  ){}
  async execute(id):Promise<Simulated>{
    if(!id){
      throw new Error("Id param is mandatory")
    }
    const simulated = await this.simulatedRepository.findById(id)
    return simulated
  }
}

export{ListSimulatedByIdUseCase}