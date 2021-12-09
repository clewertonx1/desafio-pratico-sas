import { Response, Request } from "express";
import { container } from "tsyringe";
import {ListStudentUseCase} from './ListStudentUseCase'

class ListStudentController{
  async handle(request: Request, response: Response): Promise<Response>{
    const listStudentUseCase = container.resolve(ListStudentUseCase)
    try{
      const students = await listStudentUseCase.execute()
      return response.status(201).json(students)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message});      
    }
  }
}

export{ListStudentController}