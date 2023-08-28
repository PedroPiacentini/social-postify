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

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const publication = await this.repository.findOne(id);
    if (!publication) throw new HttpException("Publication não encontrada", HttpStatus.NOT_FOUND);
    return publication;
  }

  async update(id: number, updatePublicationDto: UpdatePublicationDto) {
    const publication = await this.repository.findOne(id);
    if (!publication) throw new HttpException("Publication não encontrada", HttpStatus.NOT_FOUND);
    try {
      return await this.repository.update(id, updatePublicationDto);
    } catch {
      throw new HttpException("Media e/ou Post não encontrado(s)", HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    const publication = await this.repository.findOne(id);
    if (!publication) throw new HttpException("Publication não encontrada", HttpStatus.NOT_FOUND);
    return await this.repository.remove(id);
  }
}
