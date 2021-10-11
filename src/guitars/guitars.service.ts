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
  ) { }

  create(createGuitarDto: CreateGuitarDto) {
    const guitar: Guitar = this.guitarRepository.create(createGuitarDto);
    return this.guitarRepository.save(guitar);

  }

  findAll() {
    return this.guitarRepository.find();
  }

  findOne(id: number) {
    return this.guitarRepository.findOne(id);

  }

  update(id: number, updateGuitarDto: UpdateGuitarDto) {
    return `This action updates a #${id} guitar`;
  }

  remove(id: number) {
    return `This action removes a #${id} guitar`;
  }
}
