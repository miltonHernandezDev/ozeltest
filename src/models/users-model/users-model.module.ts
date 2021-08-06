import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/userSchema';
import { UsersModelService } from './users-model.service';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:'users',
      schema:UserSchema
    }
  ])],
  providers: [UsersModelService],
  exports:[UsersModelService]
})
export class UsersModelModule {}
