
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Test } from './Test';

@Entity("simulated")
class Simulated{
    
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @ManyToMany(type => Test, {eager: true, cascade: true})
    
    @JoinTable()
    tests: Test[]

    
}

export {Simulated}