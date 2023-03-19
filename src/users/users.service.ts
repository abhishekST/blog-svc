import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: new ObjectId(),
      username: 'john',
      password: 'changeme',
    },
    {
      userId: new ObjectId(),
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
