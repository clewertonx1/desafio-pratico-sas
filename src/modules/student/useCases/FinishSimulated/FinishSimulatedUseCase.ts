import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  studentId: string,
  simulatedId: string,
}

@injectable()
class FinishSimulatedUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository,
  ){}
  async execute({studentId, simulatedId}: IRequest):Promise<any>{

    if(!studentId){
      throw new Error("studentId cannot be null")
    }

    if(!simulatedId){
      throw new Error("simulatedId cannot be null")
    }

    const simulatedAlreadyStarted = this.studentRepository.findSimulatedInStudent({simulatedId, studentId})

    if(!simulatedAlreadyStarted){
      throw new Error("Simulated not started")
    }

    const {countTestAlreadyDone, countTestMissing} = await this.studentRepository.checkAllTestAlreadyDone({studentId, simulatedId})
   
    if(countTestMissing !== 0){
      throw new Error(`Missing ${countTestMissing} test`)
    }

  
    const score = await this.studentRepository.calculateAndSaveSimulatedScore({studentId, simulatedId})


    return score
  }
}

export{FinishSimulatedUseCase}