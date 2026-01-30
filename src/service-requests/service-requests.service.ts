import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceRequest } from './entities/service-request.entity';
import { ServiceType, Language } from '../common/constants/enum';
import { CreateHospitalityRequestDto } from './dto/create-hospitality-request.dto';
import { HospitalityRequest } from './entities/hospitality-request.entity';

@Injectable()
export class ServiceRequestsService {
    constructor(
        @InjectRepository(ServiceRequest)
        private readonly serviceRequestRepository: Repository<ServiceRequest>,
        @InjectRepository(HospitalityRequest)
        private readonly hospitalityRequestRepository: Repository<HospitalityRequest>,
    ) { }

    async create(createServiceRequestDto: CreateServiceRequestDto): Promise<ServiceRequest> {
        const serviceRequest = this.serviceRequestRepository.create(createServiceRequestDto);
        return await this.serviceRequestRepository.save(serviceRequest);
    }

    async createHospitality(createHospitalityRequestDto: CreateHospitalityRequestDto): Promise<HospitalityRequest> {
        const hospitalityRequest = this.hospitalityRequestRepository.create(createHospitalityRequestDto);
        return await this.hospitalityRequestRepository.save(hospitalityRequest);
    }

    async findAll(service?: ServiceType, language?: Language): Promise<(ServiceRequest | HospitalityRequest)[]> {
        if (service === ServiceType.HOSPITALITY) {
            const query = this.hospitalityRequestRepository.createQueryBuilder('request');
            if (language) {
                query.andWhere('request.language = :language', { language });
            }
            return await query.orderBy('request.createdAt', 'DESC').getMany();
        }

        const query = this.serviceRequestRepository.createQueryBuilder('request');

        if (service) {
            query.andWhere('request.service = :service', { service });
        }

        if (language) {
            query.andWhere('request.language = :language', { language });
        }

        const results = await query.orderBy('request.createdAt', 'DESC').getMany();

        // If no specific service requested, also include hospitality
        if (!service) {
            const hQuery = this.hospitalityRequestRepository.createQueryBuilder('request');
            if (language) {
                hQuery.andWhere('request.language = :language', { language });
            }
            const hResults = await hQuery.orderBy('request.createdAt', 'DESC').getMany();
            return [...results, ...hResults].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        }

        return results;
    }

    async findOne(id: string): Promise<ServiceRequest | HospitalityRequest> {
        const serviceRequest = await this.serviceRequestRepository.findOneBy({ id });
        if (serviceRequest) return serviceRequest;

        const hospitalityRequest = await this.hospitalityRequestRepository.findOneBy({ id });
        if (!hospitalityRequest) {
            throw new NotFoundException(`Service request with ID ${id} not found`);
        }
        return hospitalityRequest;
    }
}
