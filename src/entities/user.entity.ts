import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column({ unique: true })
  Email!: string;

  @Column()
  Password!: string;
}