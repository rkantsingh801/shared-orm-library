import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: false })
  IsNotificationEnabled!: boolean;

  @Column({ default: false })
  IsNewDashboardEnabled!: boolean;

  @Column({ default: 'UTC' })
  Timezone!: string;
}