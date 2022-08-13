import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './entities/post.schema';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }

  @Get()
  getAll(): Promise<Post[]> {
    return this.postsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', new ParseIntPipe()) id: number): Promise<Post> {
    return this.postsService.getOne(id);
  }
}
