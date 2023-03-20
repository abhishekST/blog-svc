import { IsString } from 'class-validator';

export class PostBlogDto {
  @IsString()
  title: string;

  @IsString()
  subtitle: string;

  @IsString({ each: true })
  category: [string];

  @IsString()
  description: string;
}
