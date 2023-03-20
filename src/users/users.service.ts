import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  signup(email: string, password: string, name: string): Promise<User> {
    return this.userModel.create({ email, password, name });
  }

  findOne(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }
}
