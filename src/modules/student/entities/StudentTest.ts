import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm'
import { StudentSimulated } from './StudentSimulated';
import { StudentQuest } from './StudentQuest'

@Entity("StudentTest")
class StudentTest{

    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    testId: string

    @ManyToOne(type => StudentSimulated, simulatedStudent => simulatedStudent.tests)
    simulatedStudent: StudentSimulated

    @Column("boolean", {default: false})
    done: boolean = false

    @OneToMany(type => StudentQuest, studentQuest => studentQuest.studentTest, {eager: true, cascade: true})
    quests: StudentQuest[]
    

    
}

export {StudentTest}