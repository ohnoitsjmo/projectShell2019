import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne
  } from 'typeorm';
  import ToDo from './todo';
  
  @Entity()
  export default class Category {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    name

    @OneToMany(() => ToDo, (todo) => todo.category,{eagers:true})
    todos

    @ManyToOne(() => User, (user) => user.todos)
    user
  }
  