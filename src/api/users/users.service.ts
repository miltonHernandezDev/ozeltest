import {  HttpException, HttpStatus, Injectable,  } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { bcrypt_pass, bcrypt_validate, bcrypt_validate_key } from 'src/config';
import { errorCodes } from 'src/config/errorCode';
import { loginUserDto, registerUser } from 'src/models/users-model/dto/UserDto';
import { InUser } from 'src/models/users-model/interfaces/InUser';
import { UsersModelService } from 'src/models/users-model/users-model.service';

@Injectable()
export class UsersService {

    constructor(private userModelService:UsersModelService){}

    public async create(payload:registerUser): Promise<InUser>{
        payload.password = bcrypt_pass(payload.password);
        return await this.userModelService.create(payload);
    }

    public async getById(_id:string):Promise<InUser>{
        let  user:InUser;
        
        try {
            user =  await this.userModelService.getByIdQuery({_id});
        } catch (error) {
            throw new HttpException({
                message: errorCodes.USER.NOT_FOUND.description
            }, HttpStatus.NOT_FOUND)
        }
        return user;
    }

    public async getAll():Promise<InUser[]>{
        return await this.userModelService.getAll();
    }
    public async updateOne(_id:string, payload:registerUser):Promise<InUser>{
        await this.getById(_id);


        if(!/^[a-zA-Z0-9\$\.\/]{60}$/.test(payload.password)) payload.password = bcrypt_pass(payload.password);

        return await this.userModelService.updateOne(_id, payload);
    }

    public async deleteOne(_id:string):Promise<Boolean>{
        await this.getById(_id);
        return await this.userModelService.deleteOne(_id)
    } 

    public async loginUser(payload:loginUserDto):Promise<InUser>{
        console.log(payload)
        const user =  await this.userModelService.getByIdQuery({email:payload.email});
        
        if( !user || !await bcrypt_validate(payload.password, user.password) ){
            throw new HttpException({
                message: errorCodes.USER.LOGIN_FAILED.description
            }, HttpStatus.UNAUTHORIZED)
        }

        return user;
    }
}
