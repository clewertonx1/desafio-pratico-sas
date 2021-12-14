import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm'


import { StudentTest } from './StudentTest';

@Entity("StudentQuest")
class StudentQuest{

    @PrimaryGeneratedColumn("increment")
    id?: number;
    
    @Column()
    questId: string

    @ManyToOne(type => StudentTest, studentTest => studentTest.quests)
    studentTest: StudentTest

    @Column("boolean", {default: false})
    done: boolean = false

    @Column()
    response: string


}

export {StudentQuest}