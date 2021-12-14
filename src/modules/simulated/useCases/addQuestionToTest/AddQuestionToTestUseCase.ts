import { Test } from "../../entities/Test";
import { ITestRepository } from "../../repotositories/ITestRepository";
import { IQuestionRepository } from "../../repotositories/IQuestionRepository";

import { inject, injectable } from "tsyringe";

@injectable()
class AddQuestionToTestUseCase {
  constructor(
    @inject("TestRepository")
    private testRepository: ITestRepository,
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}
  async execute({ questionId, testId }): Promise<Test> {
    const question = await this.questionRepository.findById(questionId);
    if (!question) {
      throw new Error("Question not exist");
    }
    const test = await this.testRepository.addQuestionToTest({
      question,
      testId,
    });
    return test;
  }
}

export { AddQuestionToTestUseCase };
