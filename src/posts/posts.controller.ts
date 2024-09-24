import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { getPostsDto } from './dto/get-posts.dto';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts(@Query() getPostsDto: getPostsDto) {
    return 'This action returns all posts';
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return `This action returns a #id post  ${id}`;
  }

  @Post()
  createPost(@Body() posts: any) {
    return {
      message: 'This action adds a new post'
    }   
  }
  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() posts: any) {
    return {
      message: 'This action updates a post'
    }
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return {
      message: 'This action deletes a post'
    }
  }
}


