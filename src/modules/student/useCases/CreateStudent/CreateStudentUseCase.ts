import { Student } from "../../entities/Student";

import { IStudentRepository } from "../../repositories/IStudentRepository";

import {inject, injectable} from 'tsyringe'

interface IRequest {
  name: string,
}

@injectable()
class CreateStudentUseCase{
  constructor(
    @inject("StudentRepository")
    private studentRepository: IStudentRepository
  ){}
  async execute({name}: IRequest):Promise<Student>{

    if(!name){
      throw new Error("Name cannot be null")
    }

    const studentAlreadyExist = await this.studentRepository.findByName(name)
    console.log(studentAlreadyExist)
    if(studentAlreadyExist){
      throw new Error("Student already exist")
    }
 
    const student = await this.studentRepository.create({name})
    return student
  }
}

export{CreateStudentUseCase}