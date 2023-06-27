import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private readonly model: Model<PostDocument>,
    ) {}

    async getAll(): Promise<Post[]> {
        return await this.model.find().exec();
    }

    async getOne(id: string): Promise<Post> {
        return await this.model.findById(id).exec();
    }

    async create(createPostoDto: CreatePostDto): Promise<Post> {
        console.log(createPostoDto);
        return await new this.model({
            ...createPostoDto,
            createdAt: new Date(),
            comments: [],
        }).save();
    }
}
