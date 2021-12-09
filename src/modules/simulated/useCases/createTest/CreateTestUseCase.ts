import { Test } from "../../entities/Test";
import { Question } from "../../entities/question";
import { ITestRepository } from "../../repotositories/ITestRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  name: string,
  questions: Question[],
}

@injectable()
class CreateTestUseCase{
  constructor(
    @inject("TestRepository")
    private testRepository: ITestRepository
  ){}
  async execute({name, questions}: IRequest):Promise<Test>{

    if(!name){
      throw new Error("Name cannot be null")
    }

    if(questions.length > 10){
      throw new Error("A test can have a maximum of 10 questions")
    }
 
    const testAlreadyExist = await this.testRepository.findByName(name)

    if(testAlreadyExist){
      throw new Error("The test name must be unique")
    }

    const test = await this.testRepository.create({name, questions})
    return test
  }
}

export{CreateTestUseCase}