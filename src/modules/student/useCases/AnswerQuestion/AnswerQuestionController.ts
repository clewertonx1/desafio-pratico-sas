import { Response, Request } from "express";
import { container } from "tsyringe";
import { AnswerQuestionUseCase } from "./AnswerQuestionUseCase";

class AnswerQuestionController {
  async handle(request: Request, Response: Response): Promise<Response> {
    const answerQuestionUseCase = container.resolve(AnswerQuestionUseCase);
    const { studentId, simulatedId, testId, questId, response } = request.body;
    try {
      const student = await answerQuestionUseCase.execute({
        studentId,
        simulatedId,
        testId,
        questId,
        response,
      });
      return Response.status(200).json(student);
    } catch (error) {
      console.log(error);
      return Response.status(400).json({ error: error.message });
    }
  }
}

export { AnswerQuestionController };
