import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class PostBlogDto {
  @IsString()
  title: string;

  @IsString()
  subtitle: string;

  @IsString()
  category: string;

  @IsString()
  description: string;
}
