import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'

@injectable()
class ListStudentUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository
  ){}
  async execute():Promise<Student[]>{

    const students = await this.studentRepository.listAll()
    return students
  }
}

export{ListStudentUseCase}