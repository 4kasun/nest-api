import { Param } from '@nestjs/common';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { exception } from 'console';
import { ValidationPipe } from '../../common/pipe/validation.pipe';
import { User } from '../../entity/user.schema';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  public async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User> {
    console.log('Enviromnet : ', process.env.APP);
    // try {
    const user = await this.usersService.create(createUserDto);
    return user;
    // } catch (error) {
    //   throw new exception(error);
    // }

  }

  @Get()
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param() params): Promise<User> {
    // return this.usersService.findOne(params.id);
    return this.usersService.auth('sampath@gmail.com', '1234');
  }
}
