import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfigFactory } from './common/db/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './common/guard/auth.module';
import { AboutModule } from './about/about.module';
import { ServiceRequestsModule } from './service-requests/service-requests.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfigFactory,
    }),
    UsersModule,
    AuthModule,
    AboutModule,
    ServiceRequestsModule,
  ],
})
export class AppModule { }

