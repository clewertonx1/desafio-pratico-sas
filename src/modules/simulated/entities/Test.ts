
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Question } from './question';

@Entity("test")
class Test{
    
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @ManyToMany(type => Question, {eager: true, cascade: true})

    @JoinTable()
    questions: Question[]

    @Column({default: false})
    finished: boolean
    
}

export {Test}