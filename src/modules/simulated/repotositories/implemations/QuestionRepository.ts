import { Question } from "../../entities/question";
import {IQuestionRepository, ICreateQuestionDTO} from '../IQuestionRepository'

import {getRepository, Repository} from "typeorm"

class QuestionRepository implements IQuestionRepository{
  private repository: Repository<Question>

  constructor(){
    this.repository = getRepository(Question)
  }

  async create({questionStatement, correctAnswer, dificulty}: ICreateQuestionDTO): Promise<Question>{
    const question = this.repository.create({questionStatement, correctAnswer, dificulty})
    await this.repository.save(question)
    return question
  }
  
  async findByStatament(questionStatement): Promise<Question>{
    const question = await this.repository.findOne({questionStatement})
    return question
  }

  async findById(id): Promise<Question>{
    const question = await this.repository.findOne({id})
    return question
  }

  async listAll(): Promise<Question[]>{
    const questions = await this.repository.find()
    return questions
  }
  
}

export{QuestionRepository}