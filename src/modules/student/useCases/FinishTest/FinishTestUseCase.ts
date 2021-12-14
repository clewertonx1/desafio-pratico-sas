import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  studentId: string,
  simulatedId: string,
  testId
}

@injectable()
class FinishTestUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository,
  ){}
  async execute({studentId, simulatedId, testId}: IRequest):Promise<any>{

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

    const {countAlreadyAnswerQuests, countMissingAnswerQuests, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth} = await this.studentRepository.checkAllQuestionHaveBeenAnswered({studentId, simulatedId, testId})

    if(countMissingAnswerQuests !== 0){
      throw new Error(`Missing ${countMissingAnswerQuests} answer quests}`)
    }

  const score = await this.studentRepository.calculateAndSaveTestScore({studentId, simulatedId,testId, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth})


    return {
      countEasyQuestsRight,
      coutMediumQuestRight,
      coutDificultyQuestRigth,
      score
    }
  }
}

export{FinishTestUseCase}