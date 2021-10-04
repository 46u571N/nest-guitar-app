import { Module } from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { GuitarsController } from './guitars.controller';

@Module({
  controllers: [GuitarsController],
  providers: [GuitarsService]
})
export class GuitarsModule {}
