import { Controller, Get, Post, Body, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { ServiceRequestsService } from './service-requests.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceType, Language } from '../common/constants/enum';
import { CreateHospitalityRequestDto } from './dto/create-hospitality-request.dto';

@Controller('service-requests')
export class ServiceRequestsController {
    constructor(private readonly serviceRequestsService: ServiceRequestsService) { }

    @Post()
    create(@Body() createServiceRequestDto: CreateServiceRequestDto) {
        return this.serviceRequestsService.create(createServiceRequestDto);
    }

    @Post('hospitality')
    createHospitality(@Body() createHospitalityRequestDto: CreateHospitalityRequestDto) {
        return this.serviceRequestsService.createHospitality(createHospitalityRequestDto);
    }

    @Get()
    findAll(
        @Query('service') service?: ServiceType,
        @Query('language') language?: Language,
    ) {
        return this.serviceRequestsService.findAll(service, language);
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.serviceRequestsService.findOne(id);
    }
}
