import { Question } from "../../entities/question";
import { ListQuestionUseCase } from "./ListQuestUseCase";

import { container } from "tsyringe";
import { Response, Request } from "express";

class ListQuestionController{
  async handle(request: Request, response: Response): Promise<Response>{
    const repository = await container.resolve(ListQuestionUseCase)
    const questions = await repository.execute()
    return response.status(200).json(questions)

  }
}
export{ListQuestionController}
