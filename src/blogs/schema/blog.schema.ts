import { faker } from '@faker-js/faker';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  category: [string];

  @Prop({ required: true })
  description: string;

  @Prop({ required: false, default: new Date() })
  published: Date;

  @Prop({ required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: false, default: 0 })
  view: number;

  @Prop({ required: false, default: faker.image.business() })
  img: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
