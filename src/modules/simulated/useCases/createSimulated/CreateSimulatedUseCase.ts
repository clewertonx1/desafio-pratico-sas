import { Test } from "../../entities/Test";
import { Simulated } from "../../entities/Simulated";
import { ISimulatedRepository } from "../../repotositories/ISimultedRepository";

import {inject, injectable} from 'tsyringe'



interface IRequest {
  name: string,
  tests: Test[],
}

@injectable()
class CreateSimulatedUseCase{
  constructor(
    @inject("SimulatedRepository")
    private simulatedRepository: ISimulatedRepository
  ){}
  async execute({name, tests}: IRequest):Promise<Simulated>{

    if(!name){
      throw new Error("Name cannot be null")
    }

    const simulatedAlreadyExist = await this.simulatedRepository.findByName(name)

    if(simulatedAlreadyExist){
      throw new Error("The simulated name must be unique")
    }

    const simulated = await this.simulatedRepository.create({name, tests})
    return simulated
  }
}

export{CreateSimulatedUseCase}