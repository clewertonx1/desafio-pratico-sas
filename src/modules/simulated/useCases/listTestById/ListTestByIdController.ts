import { Response, Request } from "express";
import { container } from "tsyringe";
import {ListTemplateTestUseCase} from './ListTestByIdUseCase'

class ListTemplateTestController{
  async handle(request: Request, response: Response){
    const {id} = request.params
    const listTemplateTest = container.resolve(ListTemplateTestUseCase)
    try{
      const questions = await listTemplateTest.execute(id)
      return response.status(200).json(questions)
    }catch(error){
      console.log(error)
      return response.status(400).json({error: error.message}); 
    }
  }
}

export{ListTemplateTestController}