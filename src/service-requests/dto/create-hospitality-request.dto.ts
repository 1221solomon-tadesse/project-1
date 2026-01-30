import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Language } from '../../common/constants/enum';

export class CreateHospitalityRequestDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsInt()
    @Min(1)
    numberOfPeople: number;

    @IsString()
    @IsOptional()
    specialRequest?: string;

    @IsEnum(Language)
    @IsNotEmpty()
    language: Language;
}
