import { Question } from "../../entities/question";
import { IQuestionRepository } from "../../repotositories/IQuestionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListQuestionUseCase{
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ){}
  async execute(): Promise<Question[]>{
    const questions = await this.questionRepository.listAll()
    return questions
  }
}
export{ListQuestionUseCase}