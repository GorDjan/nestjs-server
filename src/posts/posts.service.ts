import { Body, Delete, Get, Injectable, Param, Patch, Post, Query } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    getAllPosts(@Query() getPostsDto: GetPostsDto) {
        return 'This action returns all posts';
      }

      getPostById(@Param('id') id: string) {
        return `This action returns a #id post  ${id}`;
      }
    
     
      createPost(@Body() createPostDto: CreatePostDto) {
        return {
          message: 'This action adds a new post'
        }   
      }

      updatePost(@Param('id') id: string, @Body() updatePost: UpdatePostDto) {
        return {
          message: 'This action updates a post'
        }
      }
    
  
      deletePost(@Param('id') id: string) {
        return {
          message: 'This action deletes a post'
        }
      }
}
