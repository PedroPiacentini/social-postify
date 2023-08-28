import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {
  constructor(private readonly repository: MediasRepository) {}

  async create(createMediaDto: CreateMediaDto) {
    return await this.repository.create(createMediaDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const media = await this.repository.findOne(id);
    if (!media) throw new HttpException("Media não encontrada", HttpStatus.NOT_FOUND);
    return media;
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const media = await this.repository.findOne(id);
    if (!media) throw new HttpException("Media não encontrada", HttpStatus.NOT_FOUND);
    return this.repository.update(id, updateMediaDto);
  }

  async remove(id: number) {
    const media = await this.repository.findOne(id);
    if (!media) throw new HttpException("Media não encontrada", HttpStatus.NOT_FOUND);
    return this.repository.remove(id);
  }
}
