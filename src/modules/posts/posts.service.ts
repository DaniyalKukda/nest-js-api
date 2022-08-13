import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './entities/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly post: Model<PostDocument>,
  ) { }

  async getAll(): Promise<Post[]> {
    return await this.post.find().exec();
  }

  async getOne(_id: number): Promise<Post> {
    const post = await this.post.findOne({ _id });

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return post;
  }
}
