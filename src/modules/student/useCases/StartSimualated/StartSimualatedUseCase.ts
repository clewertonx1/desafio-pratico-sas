import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import { inject, injectable } from "tsyringe";
import { ISimulatedRepository } from "../../../simulated/repotositories/ISimultedRepository";

interface IRequest {
  studentId: number;
  simulatedId: string;
}

@injectable()
class StartSimualatedUseCase {
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository,
    @inject("SimulatedRepository")
    private simulatedRepository: ISimulatedRepository
  ) {}
  async execute({ studentId, simulatedId }: IRequest): Promise<Student> {
    if (!studentId) {
      throw new Error("studentId cannot be null");
    }
    if (!simulatedId) {
      throw new Error("simulatedId cannot be null");
    }

    const studentAlreadyExist = await this.studentRepository.findById(
      studentId
    );

    if (!studentAlreadyExist) {
      throw new Error("Student not exist");
    }

    const simulated = await this.simulatedRepository.findById(simulatedId);

    if (!simulated) {
      throw new Error("Simulated not exist");
    }

    const simulatedAlreadyStarted =
      await this.studentRepository.findSimulatedInStudent({
        simulatedId,
        studentId,
      });

    if (simulatedAlreadyStarted) {
      throw new Error("Simulated already started");
    }
    console.log(simulatedAlreadyStarted);
    const student = await this.studentRepository.startSimulated({
      studentId,
      simulated,
    });

    return student;
  }
}

export { StartSimualatedUseCase };
