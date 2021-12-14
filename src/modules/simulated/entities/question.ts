
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity("question")
class Question{
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    questionStatement: string

    @Column()
    correctAnswer: string

    @Column()
    dificulty: string

}

export {Question}