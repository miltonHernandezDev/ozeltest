import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersModelModule } from 'src/models/users-model/users-model.module';

@Module({
  imports:[UsersModelModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
