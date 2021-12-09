import { Student } from "../../entities/Student";
import {IStudentRepository, ICreateStudentDTO} from '../IStudentRepository'

import {getRepository, Repository} from "typeorm"
import { SimulatedStudent } from "../../entities/SimulatedStudent";

class StudentRepository implements IStudentRepository{
  private repository: Repository<Student>
  private simulatedStudent: Repository<SimulatedStudent>

  constructor(){
    this.repository = getRepository(Student)
    this.simulatedStudent = getRepository(SimulatedStudent)
  }

  async  findSimulatedInStudent({studentId, simulated}){
    const student = await this.repository.findOne({id: studentId})
    const a = await student.simulateds.filter(studentSimulated => {
      console.log(studentSimulated)
      // if(studentSimulated.simulated){
      //   return studentSimulated.simulated === simulated
      // }
    })
    console.log(a)
    return a
  }
  async startSimulated({ simulated, studentId }): Promise<Student> {
  
    const simulatedStudent = this.simulatedStudent.create({nota: "23423"})
    simulatedStudent.simulated = simulated
    this.simulatedStudent.save(simulatedStudent)
    const student = await this.repository.findOne({id: studentId})
    student.simulateds.push(simulatedStudent)
    await this.repository.save(student)
    return student
  }

  async create({name}: ICreateStudentDTO): Promise<Student>{
    const student = this.repository.create({name})
    await this.repository.save(student)
    return student
  }
  
  async findById(id): Promise<Student>{
    const student = await this.repository.findOne({id})
    return student
  }
  async findByName(name): Promise<Student>{
    const student = await this.repository.findOne({name})
    return student
  }

  async listAll(): Promise<Student[]>{
    const students = await this.repository.find()
    return students
  }

}

export{StudentRepository}