import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './entities/post.schema';


describe('PostsController', () => {
  let controller: PostsController;
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, Post]
    }).compile();

    postsController = module.get<PostsController>(PostsController);
    postsService = module.get<PostsService>(PostsService);
  });

  describe('getAll', () => {
    it('should return an array of posts', async () => {
      // const result =  ['test'];
      let result: Array<Post> = new Array();
      jest.spyOn(postsService, 'getAll').mockImplementation(() => Promise.resolve(result));
      console.log(result)
      expect(await postsController.getAll()).toBe(result);
    });
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});