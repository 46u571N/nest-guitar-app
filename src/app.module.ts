import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarsModule } from './guitars/guitars.module';

@Module({
  imports: [GuitarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
