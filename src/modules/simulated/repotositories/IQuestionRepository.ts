import { Question } from "../entities/question";

interface ICreateQuestionDTO{
  questionStatement: string,
  correctAnswer: string,
  dificulty: string
}

interface IQuestionRepository{
  create({questionStatement, correctAnswer, dificulty}: ICreateQuestionDTO): Promise<Question>
  findByStatament(questionStatement:string): Promise<Question>
  listAll(): Promise<Question[]>
  findById(id:string): Promise<Question>
}

export {ICreateQuestionDTO, IQuestionRepository}