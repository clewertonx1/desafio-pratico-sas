import { ITestRepository } from "../../repotositories/ITestRepository";
import { inject, injectable } from "tsyringe";
import { Test } from "modules/simulated/entities/Test";

@injectable()
class ListTemplateTestUseCase{
  constructor(
    @inject("TestRepository")
    private testRepository: ITestRepository
  ){}
  async execute(id): Promise<Test>{
    const test = await this.testRepository.findById(id)
    return test
  }
}

export{ListTemplateTestUseCase}