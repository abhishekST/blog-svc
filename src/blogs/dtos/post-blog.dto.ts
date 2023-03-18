import { IsDate, IsString } from 'class-validator';

export class PostBlogDto {
  @IsString()
  title: string;

  @IsString()
  subtitle: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsDate()
  published: string;

  @IsString()
  userId: string;
}
