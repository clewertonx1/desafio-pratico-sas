
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
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

    
    
}

export {Test}