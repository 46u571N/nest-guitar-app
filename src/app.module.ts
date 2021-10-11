import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Guitar } from './guitars/entities/guitar.entity';
import { GuitarsModule } from './guitars/guitars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'guitardb',
      entities: [Guitar],
      synchronize: true,
  }),
  GuitarsModule,
  BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
