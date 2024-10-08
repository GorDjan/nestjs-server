import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { GetPostsDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }
  @Get()
  getAllPosts(@Query() getPostsDto: GetPostsDto) {
    return this.postsService.getAllPosts(getPostsDto);
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);  
  }
  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePost: UpdatePostDto) {
    return this.postsService.updatePost(id, updatePost);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}


