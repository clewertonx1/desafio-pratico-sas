import { Simulated } from "../../entities/Simulated";
import {ISimulatedRepository, ICreateSimulatedDTO} from '../ISimultedRepository'

import {getRepository, Repository} from "typeorm"


class SimulatedRepository implements ISimulatedRepository{
  private repository: Repository<Simulated>

  constructor(){
    this.repository = getRepository(Simulated)
  }

  async create({name, tests}: ICreateSimulatedDTO): Promise<Simulated>{
    const simulated = this.repository.create({name, tests})
    await this.repository.save(simulated)
    return simulated
  }
  
  async findById(id): Promise<Simulated>{
    const simulated = await this.repository.findOne({id})
    return simulated
  }
  async findByName(name): Promise<Simulated>{
    const simulated = await this.repository.findOne({name})
    return simulated
  }

  async addTestToSimulated({test, simulatedId}): Promise<Simulated>{
    const simualated = await this.repository.findOne({id: simulatedId})
    simualated.tests.push(test)
    await this.repository.save(simualated)
    return simualated
  }
    
  async listAll(): Promise<Simulated[]>{
    const simualateds = await this.repository.find()
    return simualateds
  }
}

export{SimulatedRepository}