import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostBlogDto } from './dtos/post-blog.dto';
import { Blog, BlogDocument } from './schema/blog.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async postBlog(postBlog: PostBlogDto) {
    const data = await this.blogModel.create(postBlog);
    console.log(data);
    return data;
  }
}
