import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  make: string;

  @Column({ type: 'numeric' })
  year: number;

  @Column({ type: 'varchar' })
  model: string;

  @Column({ type: 'varchar' })
  price: string;

  @Column({ type: 'varchar' })
  imageUrl: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;
}
