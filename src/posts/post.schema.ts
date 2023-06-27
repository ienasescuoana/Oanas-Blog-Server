import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    imageURL: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;

    @Prop({ required: true })
    comments?: [{ name: string; rating?: number; message?: string }];
}

export const PostSchema = SchemaFactory.createForClass(Post);
