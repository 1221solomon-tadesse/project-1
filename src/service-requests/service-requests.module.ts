import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequestsService } from './service-requests.service';
import { ServiceRequestsController } from './service-requests.controller';
import { ServiceRequest } from './entities/service-request.entity';
import { HospitalityRequest } from './entities/hospitality-request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRequest, HospitalityRequest])],
    controllers: [ServiceRequestsController],
    providers: [ServiceRequestsService],
    exports: [ServiceRequestsService],
})
export class ServiceRequestsModule { }
