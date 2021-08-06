import { Document } from "mongoose";

export class registerUser extends Document{
    readonly name:string;
    readonly lastname:string;
    readonly email:string;
    readonly dni:number;
    password:string;
}



export class loginUserDto extends Document{
    readonly email:string;
    readonly password:string;
}