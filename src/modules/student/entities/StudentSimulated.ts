
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm'
import { Student } from './Student';
import { StudentTest } from './StudentTest';

@Entity("StudentSimulated")
class StudentSimulated{
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    simulatedId: string

    @ManyToOne(type => Student, student => student.simulateds)
    student: Student
    
    @Column("boolean", {default: false})
    done: boolean = false

    @OneToMany(type => StudentTest, testStudent => testStudent.simulatedStudent, {eager: true, cascade: true})
    tests: StudentTest[]

}

export {StudentSimulated}