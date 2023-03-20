import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { PostBlogDto } from './dtos/post-blog.dto';
import { Blog, BlogDocument } from './schema/blog.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  postBlog(postBlog: PostBlogDto, userId: ObjectId) {
    const postBlogData = {
      ...postBlog,
      userId,
    };
    return this.blogModel.create(postBlogData);
  }

  getBlogList(categories: string[]): Promise<BlogDocument[]> {
    return this.blogModel.find({ category: { $in: categories } });
  }
}
