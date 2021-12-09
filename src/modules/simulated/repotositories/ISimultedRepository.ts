import { Simulated } from "../entities/Simulated";
import { Test } from "../entities/Test";

interface ICreateSimulatedDTO{
  name: string,
  tests: Test[]
}

interface ISimulatedRepository{
  create({name, tests}: ICreateSimulatedDTO): Promise<Simulated>
  findById(id:string): Promise<Simulated>
  listAll(): Promise<Simulated[]>
  addTestToSimulated({test, simulatedId}): Promise<Simulated>
  findByName(name): Promise<Simulated>
}

export {ICreateSimulatedDTO, ISimulatedRepository}