import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { Guitar } from './entities/guitar.entity';


@Injectable()
export class GuitarsService {

  constructor(
    @InjectRepository(Guitar)
    private guitarRepository: Repository<Guitar>
  ) {}

  create(createGuitarDto: CreateGuitarDto) {
    return `This action adds a new guitar`;
  }

  findAll() {
    return `This action returns all guitars`
  }

  findOne(id: number) {
    return `This action returns a #${id} guitar`;
  }

  update(id: number, updateGuitarDto: UpdateGuitarDto) {
    return `This action updates a #${id} guitar`;
  }

  remove(id: number) {
    return `This action removes a #${id} guitar`;
  }
}