import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './posts/post.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://oana:proiectlicenta@oana-blog.w8gqcru.mongodb.net/',
        ),
        PostModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
