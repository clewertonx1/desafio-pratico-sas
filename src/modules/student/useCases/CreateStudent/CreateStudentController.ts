import { Response, Request } from "express";
import { container } from "tsyringe";
import {CreateStudentUseCase} from './CreateStudentUseCase'

class CreateStudentControoler{
  async handle(request: Request, response: Response): Promise<Response>{
    const createStudentUseCase = container.resolve(CreateStudentUseCase)
    const {name} = request.body
    try{
      const student = await createStudentUseCase.execute({name})
      return response.status(201).json(student)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});      
    }
  }
}

export{CreateStudentControoler}