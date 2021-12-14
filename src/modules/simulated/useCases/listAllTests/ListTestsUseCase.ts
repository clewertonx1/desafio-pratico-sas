import { Test } from "../../entities/Test";
import { ITestRepository } from "../../repotositories/ITestRepository";

import {inject, injectable} from 'tsyringe'

@injectable()
class ListTestsUseCase{
  constructor(
    @inject("TestRepository")
    private testRepository: ITestRepository
  ){}
  async execute():Promise<Test[]>{
    const test = await this.testRepository.listAll()
    return test
  }
}

export{ListTestsUseCase}