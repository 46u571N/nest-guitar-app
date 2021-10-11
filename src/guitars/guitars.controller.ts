import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';

@Controller('guitars')
export class GuitarsController {
  constructor(private readonly guitarsService: GuitarsService) {}

  @Post()
  create(
    @Body() createGuitarDto: CreateGuitarDto,
  ): Promise<
    import('c:/Users/Administrador/tec-web-LS/nest-guitar-app/src/guitars/entities/guitar.entity').Guitar
  > {
    return this.guitarsService.create(createGuitarDto);
  }

  @Get()
  findAll(): Promise<
    import('c:/Users/Administrador/tec-web-LS/nest-guitar-app/src/guitars/entities/guitar.entity').Guitar[]
  > {
    return this.guitarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guitarsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGuitarDto: UpdateGuitarDto) {
    return this.guitarsService.update(+id, updateGuitarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guitarsService.remove(+id);
  }
}
