import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AboutTranslation } from './entities/about-translation.entity';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { Language } from '../common/constants/enum';

@Injectable()
export class AboutService {
    constructor(
        @InjectRepository(AboutTranslation)
        private readonly aboutRepository: Repository<AboutTranslation>,
    ) { }

    async create(createAboutDto: CreateAboutDto): Promise<AboutTranslation> {
        const existing = await this.aboutRepository.findOne({
            where: { language: createAboutDto.language }
        });
        if (existing) {
            throw new ConflictException(`Content for language ${createAboutDto.language} already exists`);
        }
        const about = this.aboutRepository.create(createAboutDto);
        return this.aboutRepository.save(about);
    }

    async findAll(): Promise<AboutTranslation[]> {
        return this.aboutRepository.find();
    }

    async findByLanguage(language: Language): Promise<AboutTranslation> {
        const about = await this.aboutRepository.findOne({ where: { language } });
        if (!about) {
            throw new NotFoundException(`About content for language ${language} not found`);
        }
        return about;
    }

    async findOne(id: string): Promise<AboutTranslation> {
        const about = await this.aboutRepository.findOne({ where: { id } });
        if (!about) {
            throw new NotFoundException(`About content with ID ${id} not found`);
        }
        return about;
    }

    async update(id: string, updateAboutDto: UpdateAboutDto): Promise<AboutTranslation> {
        const about = await this.findOne(id);
        Object.assign(about, updateAboutDto);
        return this.aboutRepository.save(about);
    }

    async remove(id: string): Promise<void> {
        const about = await this.aboutRepository.findOne({ where: { id } });
        if (!about) {
            throw new NotFoundException(`About content with ID ${id} not found`);
        }
        await this.aboutRepository.remove(about);
    }
}
