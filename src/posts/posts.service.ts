import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    return await this.repository.create(createPostDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const post = await this.repository.findOne(id);
    if (!post) throw new HttpException("Post não encontrado", HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.repository.findOne(id);
    if (!post) throw new HttpException("Post não encontrado", HttpStatus.NOT_FOUND);
    return this.repository.update(id, updatePostDto);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
