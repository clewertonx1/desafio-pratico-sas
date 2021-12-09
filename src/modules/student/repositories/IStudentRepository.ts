import { Student } from "../entities/Student";

interface ICreateStudentDTO{
  name: string,
}

interface IStudentRepository{
  create({name}: ICreateStudentDTO): Promise<Student>
  findById(id:string): Promise<Student>
  listAll(): Promise<Student[]>
  startSimulated({simulated, studentId}): Promise<Student>
  findByName(name): Promise<Student>
  findSimulatedInStudent({studentId, simulated})
}

export {ICreateStudentDTO, IStudentRepository}