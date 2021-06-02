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

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: any): Promise<User> {
    return this.userModel.findById({_id: id});
  }

  async auth(username: string, pass: string): Promise<User> {
    return this.userModel.findOne({email: username, password:pass});
  }
}
