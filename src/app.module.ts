import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Guitar } from './guitars/entities/guitar.entity';
import { GuitarsModule } from './guitars/guitars.module';
import { BrandsModule } from './brands/brands.module';
import { Brand } from './brands/entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Guitar, Brand],
      synchronize: true,
      /*ssl: {
        rejectUnauthorized: false,
      },*/
  }),
  GuitarsModule,
  BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
