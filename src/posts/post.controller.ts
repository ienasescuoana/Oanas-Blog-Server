import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('Posts')
export class PostController {
    constructor(private readonly service: PostService) {}

    @Get()
    async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.service.getOne(id);
    }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        return await this.service.create(createPostDto);
    }
}
