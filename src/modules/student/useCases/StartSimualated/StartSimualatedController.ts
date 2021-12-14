import { Response, Request } from "express";
import { container } from "tsyringe";
import { StartSimualatedUseCase } from "./StartSimualatedUseCase";

class StartSimualatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const startSimualatedUseCase = container.resolve(StartSimualatedUseCase);
    const { simulatedId, studentId } = request.body;
    try {
      const student = await startSimualatedUseCase.execute({
        simulatedId,
        studentId,
      });
      return response.status(200).json(student);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}

export { StartSimualatedController };
