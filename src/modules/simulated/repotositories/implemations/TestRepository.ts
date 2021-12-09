import { Test } from "../../entities/Test";
import {ITestRepository, ICreateTestDTO} from '../ITestRepository'

import {getRepository, Repository} from "typeorm"

class TestRepository implements ITestRepository{
  private repository: Repository<Test>

  constructor(){
    this.repository = getRepository(Test)
  }

  async create({name, questions}: ICreateTestDTO): Promise<Test>{
    const test = this.repository.create({name, questions})
    await this.repository.save(test)
    return test
  }
  
  async findById(id): Promise<Test>{
    const test = await this.repository.findOne({id})
    return test
  }
  async findByName(name): Promise<Test>{
    const test = await this.repository.findOne({name})
    return test
  }

  async addQuestionToTest({question, testId}): Promise<Test>{
    const test = await this.repository.findOne({id: testId})
    test.questions.push(question)
    await this,this.repository.save(test)
    return test
  }
  
  async listTemplate(id){
    const test = await this.repository.findOne({id})
    return test.questions
  }
  
  async listAll(): Promise<Test[]>{
    const tests = await this.repository.find()
    return tests
  }
}

export{TestRepository}