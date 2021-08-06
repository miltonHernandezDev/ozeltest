import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModelModule } from './models/users-model/users-model.module';
import { UsersModule } from './api/users/users.module';
import envPath from './config/enviroments';


console.log(envPath.db_connection)

@Module({
  imports: [
    MongooseModule.forRoot(envPath.db_connection),
    UsersModelModule,
    UsersModule
  ],
})
export class AppModule {}
