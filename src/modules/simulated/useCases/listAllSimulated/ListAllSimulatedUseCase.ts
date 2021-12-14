import { Test } from "../../entities/Test";
import { Simulated } from "../../entities/Simulated";
import { ISimulatedRepository } from "../../repotositories/ISimultedRepository";

import {inject, injectable} from 'tsyringe'

@injectable()
class ListAllSimulatedUseCase{
  constructor(
    @inject("SimulatedRepository")
    private simulatedRepository: ISimulatedRepository
  ){}
  async execute():Promise<Simulated[]>{
    const simulateds = await this.simulatedRepository.listAll()
    return simulateds
  }
}

export{ListAllSimulatedUseCase}