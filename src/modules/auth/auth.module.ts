import { Module } from '@nestjs/common';
import { Passport } from 'passport';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, Passport],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
