
import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, } from 'typeorm'
import { SimulatedStudent } from './SimulatedStudent';

@Entity("Student")
class Student{
    
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @OneToMany(type => SimulatedStudent, simulatedStudent => simulatedStudent.student, {eager: true, cascade: true})
    @JoinColumn()
    simulateds: SimulatedStudent[]

    
}

export {Student}