import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ServiceType, Language } from '../../common/constants/enum';

export class CreateServiceRequestDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEnum(ServiceType)
    @IsNotEmpty()
    service: ServiceType;

    @IsEnum(Language)
    @IsNotEmpty()
    language: Language;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    nationality: string;

    @IsString()
    @IsNotEmpty()
    dob: string;

    @IsString()
    @IsNotEmpty()
    motherName: string;

    @IsString()
    @IsNotEmpty()
    idCardNumber: string;

    @IsString()
    @IsNotEmpty()
    maritalStatus: string;

    @IsString()
    @IsNotEmpty()
    dateArrivalYemen: string;

    @IsString()
    @IsNotEmpty()
    dateEntryAden: string;

    @IsString()
    @IsNotEmpty()
    currentAddress: string;

    @IsString()
    @IsOptional()
    frequentlyVisited?: string;

    @IsString()
    @IsNotEmpty()
    occupation: string;

    @IsString()
    @IsNotEmpty()
    mobileNumber: string;

    @IsString()
    @IsOptional()
    criminalRecord?: string;

    @IsString()
    @IsOptional()
    policeStation?: string;

    @IsString()
    @IsOptional()
    accomplices?: string;

    @IsString()
    @IsOptional()
    sentence?: string;

    @IsString()
    @IsOptional()
    healthStatus?: string;

    @IsString()
    @IsOptional()
    ethiopiaContact?: string;

    @IsString()
    @IsOptional()
    physicalMarks?: string;
}
