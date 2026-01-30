import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ServiceType, Language } from '../../common/constants/enum';

@Entity('service_requests')
export class ServiceRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({
        type: 'enum',
        enum: ServiceType,
    })
    service: ServiceType;

    @Column({
        type: 'enum',
        enum: Language,
    })
    language: Language;

    // Shared Fields for NGOs and Community Service
    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    nationality: string;

    @Column({ name: 'date_of_birth', nullable: true })
    dob: string;

    @Column({ name: 'mother_name', nullable: true })
    motherName: string;

    @Column({ name: 'id_card_number', nullable: true })
    idCardNumber: string;

    @Column({ name: 'marital_status', nullable: true })
    maritalStatus: string;

    @Column({ name: 'date_arrival_yemen', nullable: true })
    dateArrivalYemen: string;

    @Column({ name: 'date_entry_aden', nullable: true })
    dateEntryAden: string;

    @Column({ name: 'current_residential_address', nullable: true })
    currentAddress: string;

    @Column({ name: 'frequently_visited_locations', nullable: true, type: 'text' })
    frequentlyVisited: string;

    @Column({ name: 'workplace_occupation', nullable: true })
    occupation: string;

    @Column({ name: 'mobile_number', nullable: true })
    mobileNumber: string;

    @Column({ name: 'prior_criminal_record', nullable: true, type: 'text' })
    criminalRecord: string;

    @Column({ name: 'police_station_detained', nullable: true })
    policeStation: string;

    @Column({ name: 'accomplices_previous_case', nullable: true, type: 'text' })
    accomplices: string;

    @Column({ name: 'sentence_ruling', nullable: true, type: 'text' })
    sentence: string;

    @Column({ name: 'health_status', nullable: true, type: 'text' })
    healthStatus: string;

    @Column({ name: 'ethiopia_contact', nullable: true, type: 'text' })
    ethiopiaContact: string;

    @Column({ name: 'distinguishing_physical_marks', nullable: true, type: 'text' })
    physicalMarks: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
