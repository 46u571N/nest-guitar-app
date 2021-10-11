import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>
  ) { }

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  findAll() {
    return this.brandRepository.find();
  }

  findOne(id: number) {
    return this.brandRepository.findOne(id);
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    this.brandRepository.update(id, updateBrandDto);
    return this.brandRepository.findOne(id);
  }

  remove(id: number) {
    this.brandRepository.delete(id);
    return `This action removes a #${id} brand`;
  }
}
