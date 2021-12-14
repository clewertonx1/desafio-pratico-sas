import { Test } from "../entities/Test";
import { Question } from "../entities/question";

interface ICreateTestDTO{
  name: string,
  questions: Question[]
}

interface ITestRepository{
  create({name, questions}: ICreateTestDTO): Promise<Test>
  findById(id:string): Promise<Test>
  listAll(): Promise<Test[]>
  addQuestionToTest({question, testId}): Promise<Test>
  findByName(name): Promise<Test>
  listTemplate(id): Promise<Question[]>
}

export {ICreateTestDTO, ITestRepository}