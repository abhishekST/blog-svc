import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';
import { BlogsService } from './blogs.service';
import { PostBlogDto } from './dtos/post-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogServices: BlogsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async postBlog(@Body() body: PostBlogDto) {
    return this.blogServices.postBlog(body);
  }
}
