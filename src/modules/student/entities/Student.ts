import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, } from 'typeorm'
import { StudentSimulated } from './StudentSimulated';

@Entity("Student")
class Student{
    
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @OneToMany(type => StudentSimulated, simulatedStudent => simulatedStudent.student, {eager: true, cascade: true})
    simulateds: StudentSimulated[]
    
    
}

export {Student}