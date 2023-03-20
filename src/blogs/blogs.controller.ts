import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { Serialize } from 'interceptors/serialize.interceptor';
import { ObjectId } from 'mongodb';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';
import { BlogsService } from './blogs.service';
import { PostBlogDto } from './dtos/post-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogServices: BlogsService) {}
  @Serialize(PostBlogDto)
  @UseGuards(JwtAuthGuard)
  @Post()
  async postBlog(@Request() req, @Body() body: PostBlogDto) {
    console.log(req.user);
    return this.blogServices.postBlog(body, new ObjectId(req.user.userId));
  }
}
