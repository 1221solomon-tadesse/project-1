import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Language } from '../../common/constants/enum';

@Entity('about_translations')
export class AboutTranslation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'enum',
        enum: Language,
        unique: true, // Assuming one 'about' entry per language
    })
    language: Language;

    @Column()
    title: string;

    @Column({ type: 'text' })
    mission: string;

    @Column({ type: 'text' })
    vision: string;

    @Column({ type: 'text' })
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
