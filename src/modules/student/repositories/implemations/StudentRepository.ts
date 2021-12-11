import { Student } from "../../entities/Student";
import {IStudentRepository, ICreateStudentDTO, IFinishSimulatedDTO} from '../IStudentRepository'
import {getRepository, Repository} from "typeorm"
import { StudentSimulated } from "../../entities/StudentSimulated";
import { StudentTest } from "../../entities/StudentTest";
import { StudentQuest } from "../../entities/StudentQuest";

class StudentRepository implements IStudentRepository{
  private studentRepository: Repository<Student>
  private studentSimulatedRepository: Repository<StudentSimulated>
  private studentTestRepository: Repository<StudentTest>
  private studentQuestRepository: Repository<StudentQuest>

  constructor(){
    this.studentRepository = getRepository(Student)
    this.studentSimulatedRepository = getRepository(StudentSimulated)
    this.studentTestRepository = getRepository(StudentTest)
    this.studentQuestRepository = getRepository(StudentQuest)

  }

  async findById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({id: id})
    return student
  }
  async startSimulated({ simulated, studentId }): Promise<Student> {
    const student = await this.studentRepository.findOne({id: studentId})
    
    const simulatedId = simulated.id 
    const studentSimulated = this.studentSimulatedRepository.create({simulatedId, tests: []})

    await simulated.tests.forEach(async test => {

      const studentTest = await this.studentTestRepository.create({testId: test.id, quests: []})
      await test.questions.forEach(async quest => {
        const studentQuest = await this.studentQuestRepository.create({questId: quest.id, response: ""})
        await studentTest.quests.push(studentQuest)
      })
      await studentSimulated.tests.push(studentTest)
    })
    
    student.simulateds.push(studentSimulated)
    
    await this.studentRepository.save(student)

    return student
  }
  finishSimulated({ simulatedStudentId, tests }: IFinishSimulatedDTO): Promise<Student> {
    throw new Error("Method not implemented.");
  }

  async  findSimulatedInStudent({studentId, simulatedId}){
    
    const student = await this.studentRepository.findOne({id: studentId})
    console.log(student)
    return student.simulateds.filter(simulated => {
      return simulated.simulatedId === simulatedId
    })
  }

  async answerQuestion({studentId, simulatedId, testId,questId, response}): Promise<Student>{
    const student = await this.studentRepository.findOne({id: studentId})
    student.simulateds.forEach(simulated => {
      if(simulated.id == simulatedId){
        simulated.tests.forEach(test => {
          if(test.id == testId){
            test.quests.forEach(quest => {
              if(quest.questId == questId){
                  quest.response = response
                  quest.done = true
              }
            })
          }
        })
      }
    })
    await this.studentRepository.save(student)
    return student 
  }



  async create({name}: ICreateStudentDTO): Promise<Student>{
    const student = this.studentRepository.create({name})
    await this.studentRepository.save(student)
    return student
  }

  async findByName(name): Promise<Student>{
    const student = await this.studentRepository.findOne({name})
    return student
  }

  async listAll(): Promise<Student[]>{
    const students = await this.studentRepository.find()
    return students
  }

}

export{StudentRepository}