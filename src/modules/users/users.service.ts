import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../entity/user.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  private user: any;

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    this.user = userModel;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // this.users.push(user);
    // return user;

    const createdUser = this.user(createUserDto);
    return createdUser.save();
  }

  findAll(): User[] {
    return this.users;
  }
}
