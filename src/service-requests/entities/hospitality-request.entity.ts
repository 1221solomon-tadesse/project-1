import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Language } from '../../common/constants/enum';

@Entity('hospitality_requests')
export class HospitalityRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @Column({ nullable: true })
    email: string;

    @Column()
    address: string;

    @Column({ name: 'number_of_people', type: 'int', default: 1 })
    numberOfPeople: number;

    @Column({ name: 'special_request', type: 'text', nullable: true })
    specialRequest: string;

    @Column({
        type: 'enum',
        enum: Language,
    })
    language: Language;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
