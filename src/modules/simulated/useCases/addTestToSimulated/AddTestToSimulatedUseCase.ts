import { Test } from "../../entities/Test";
import { Simulated } from "../../entities/Simulated";
import { ISimulatedRepository } from "../../repotositories/ISimultedRepository";

import {inject, injectable} from 'tsyringe'
import { ITestRepository } from "../../repotositories/ITestRepository";



interface IRequest {
  simulatedId: string,
  testId: string,
}

@injectable()
class AddTestToSimulatedUseCase{
  constructor(
    @inject("SimulatedRepository")
    private simulatedRepository: ISimulatedRepository,
    @inject("TestRepository")
    private testRepository: ITestRepository
  ){}
  async execute({simulatedId, testId}: IRequest):Promise<Simulated>{

    if(!simulatedId){
      throw new Error("SimulatedId cannot be null")
    }
    
    if(!testId){
      throw new Error("SimulatedId cannot be null")
    }

    const test = await this.testRepository.findById(testId)
    const simulatedAlreadyExist = await this.simulatedRepository.findById(simulatedId)

    if(!test){
      throw new Error("The test not exist")
    }

    if(!simulatedAlreadyExist){
      throw new Error("The simulated not exist")
    }

    const testAlreadyAddToSimulated =  simulatedAlreadyExist.tests.find(test => test.id === parseInt(testId))

    if(testAlreadyAddToSimulated){
      throw new Error("The test already exists in simulated")
    }

    const simulated = await this.simulatedRepository.addTestToSimulated({simulatedId, test})
    return simulated
  }
}

export{AddTestToSimulatedUseCase}