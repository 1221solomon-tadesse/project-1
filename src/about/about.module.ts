import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { AboutTranslation } from './entities/about-translation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AboutTranslation])],
    controllers: [AboutController],
    providers: [AboutService],
    exports: [AboutService],
})
export class AboutModule { }
