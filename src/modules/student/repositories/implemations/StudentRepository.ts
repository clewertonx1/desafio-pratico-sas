import { Student } from "../../entities/Student";
import {IStudentRepository, ICreateStudentDTO} from '../IStudentRepository'
import {getRepository, Repository} from "typeorm"
import { StudentSimulated } from "../../entities/StudentSimulated";
import { StudentTest } from "../../entities/StudentTest";
import { StudentQuest } from "../../entities/StudentQuest";
import { Question } from "../../../simulated/entities/question";
import { injectable } from "tsyringe";

@injectable()
class StudentRepository implements IStudentRepository{
  private studentRepository: Repository<Student>
  private studentSimulatedRepository: Repository<StudentSimulated>
  private studentTestRepository: Repository<StudentTest>
  private studentQuestRepository: Repository<StudentQuest>
  private questionRepository: Repository<Question>
  constructor(){
    this.studentRepository = getRepository(Student)
    this.studentSimulatedRepository = getRepository(StudentSimulated)
    this.studentTestRepository = getRepository(StudentTest)
    this.studentQuestRepository = getRepository(StudentQuest)
    this.questionRepository = getRepository(Question)

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


  async findSimulatedInStudent({studentId, simulatedId}){   
    const student = await this.studentRepository.findOne({id: studentId})
    return student.simulateds.filter(simulated => {
      return simulated.simulatedId === simulatedId
    })
  }
  async verifyQuestReponse({questId, response}){
    const question =  await this.questionRepository.findOne({id: questId})
    if(question.correctAnswer == response){
      return {right: true, dificulty: question.dificulty}
    }
    return {right: false, dificulty: question.dificulty}
  }

  async calculateAndSaveSimulatedScore({studentId, simulatedId}){
    const student = await this.studentRepository.findOne({id: studentId})
    let testsScore = 0
    let simulatedScore = 0
    student.simulateds.forEach(simulated => {
      if(simulated.simulatedId == simulatedId){
        simulated.tests.forEach(test => {
          testsScore = parseInt(test.score) + testsScore
        })
        simulatedScore = testsScore / simulated.tests.length
        simulated.score = String(simulatedScore)
        simulated.done = true
      }
    })
    await this.studentRepository.save(student) 
    return simulatedScore
  }

  async calculateAndSaveTestScore({ studentId, simulatedId, testId, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth }) {
    const student = await this.studentRepository.findOne({id: studentId})

    const Vf = 15
    const Vm = 12
    const Vd = 8
    const score = (countEasyQuestsRight * Vf) + (coutMediumQuestRight * Vm) + (coutDificultyQuestRigth * Vd) + 600

    student.simulateds.forEach(simulated => {
      if(simulated.id == simulatedId){
        simulated.tests.forEach(test =>{
          if(test.testId == testId){
            test.score = String(score)
            test.done = true
          }
        })
      }
    })
    await this.studentRepository.save(student)
    return score
  }
  async checkAllTestAlreadyDone({studentId, simulatedId}){
    const student = await this.studentRepository.findOne({id: studentId})
    let countTestAlreadyDone = 0 
    let countTestMissing = 0 
    student.simulateds.forEach(simulated => {
      simulated.tests.forEach(test => {
        if(test.done){
          countTestAlreadyDone = countTestAlreadyDone + 1
        }else{
          countTestMissing = countTestMissing = 1
        }
      })
    })
    return {countTestAlreadyDone, countTestMissing}
  }
  async checkAllQuestionHaveBeenAnswered({studentId, simulatedId, testId}){
    const student = await this.studentRepository.findOne({id: studentId})

    let countAlreadyAnswerQuests = 0 
    let countMissingAnswerQuests = 0
    let countEasyQuestsRight = 0
    let coutMediumQuestRight = 0 
    let coutDificultyQuestRigth = 0

    await Promise.all(student.simulateds.map(async simulated => {
      if(simulated.simulatedId == simulatedId){
        await Promise.all(simulated.tests.map(async test => {
          if(test.testId == testId){
            await Promise.all(test.quests.map(async quest => {
              if(quest.done){
                countAlreadyAnswerQuests = countAlreadyAnswerQuests + 1
                const {right, dificulty} = await this.verifyQuestReponse({questId: quest.questId, response: quest.response})
                if(right){
                  console.log(dificulty)
                  if(dificulty === "facil"){    
                    countEasyQuestsRight = countEasyQuestsRight + 1
                   
                  }
                  if(dificulty === "media"){
                    coutMediumQuestRight = coutMediumQuestRight + 1
                  }
                  if(dificulty === "dificil"){
                    coutDificultyQuestRigth = coutDificultyQuestRigth + 1
                  }
                  console.log(countEasyQuestsRight, coutDificultyQuestRigth, coutMediumQuestRight)
                }
              }else{
                countMissingAnswerQuests = countMissingAnswerQuests + 1
              }
            }))
          }
        }))
      }  
    }))
    console.log({countAlreadyAnswerQuests, countMissingAnswerQuests, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth})
    return {countAlreadyAnswerQuests, countMissingAnswerQuests, countEasyQuestsRight, coutMediumQuestRight, coutDificultyQuestRigth}
  }

  async getRankingOfSimulated({simulatedId}): Promise<any>{
    const simulateds = await this.studentSimulatedRepository.find({relations: ["student"], order: {score: "ASC"}, take: 5})
    const students = simulateds.map(simulated => {return simulated.student})
    return students
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