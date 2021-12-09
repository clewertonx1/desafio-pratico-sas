
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, } from 'typeorm'
import { Simulated } from '../../simulated/entities/Simulated';
import { Student } from './Student';

@Entity("SimulatedStudent")
class SimulatedStudent{
    
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column("boolean", {default: false})
    done: boolean = false

    @Column()
    nota: string

    @ManyToOne(type => Student, student => student.simulateds)
    student: Student

    @ManyToMany(type => Simulated, {eager: true, cascade: true})
    @JoinTable()
    simulated: Simulated



    
}

export {SimulatedStudent}