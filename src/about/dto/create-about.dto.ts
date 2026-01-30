import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Language } from '../../common/constants/enum';

export class CreateAboutDto {
    @IsEnum(Language)
    @IsNotEmpty()
    language: Language;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    mission: string;

    @IsString()
    @IsNotEmpty()
    vision: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
