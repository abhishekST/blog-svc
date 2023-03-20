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

  getBlogList(categories: string[], view: number): Promise<BlogDocument[]> {
    return this.blogModel
      .find({
        ...(categories?.length > 0 ? { category: { $in: categories } } : {}),
        ...(view ? { view } : {}),
      })
      .populate('userId', { password: 0 });
  }

  getBlog(id: string) {
    return this.blogModel
      .findById(new ObjectId(id))
      .populate('userId', { password: 0 });
  }

  updateViewOfBlog(id: string) {
    return this.blogModel.findByIdAndUpdate(new ObjectId(id), {
      $inc: { view: 1 },
    });
  }
}
