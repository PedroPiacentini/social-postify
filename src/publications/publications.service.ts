import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(private readonly repository: PublicationsRepository) {}

  async create(createPublicationDto: CreatePublicationDto) {
    try {
      return await this.repository.create(createPublicationDto);
    } catch {
      throw new HttpException("Media e/ou Post não encontrado(s)", HttpStatus.NOT_FOUND);
    }
    
  }

  findAll() {
    return `This action returns all publications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
