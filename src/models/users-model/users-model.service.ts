import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { registerUser } from './dto/UserDto';
import { InUser } from './interfaces/InUser';

@Injectable()
export class UsersModelService {

    constructor(
        @InjectModel('users') private userModel: Model<InUser>
      ) {}

      public async create(payload:registerUser): Promise<InUser>{
          return await this.userModel.create(payload);
      }

      public async getByIdQuery(getBy:{_id:string} | {email:string}):Promise<InUser>{
          return await this.userModel.findOne(getBy);
      }

      public async getAll():Promise<InUser[]>{
          return await this.userModel.find();
      }
      public async updateOne(_id:string, payload:registerUser):Promise<InUser>{
        await this.userModel.updateOne({_id}, payload);
        return await this.getByIdQuery({_id});
      }

      public async deleteOne(_id:string):Promise<Boolean>{
        return await this.userModel.deleteOne({_id}) ? true : false;
      } 
}
