import { Document } from "mongoose";

export interface InUser extends Document{
    readonly name:string;
    readonly lastname:string;
    readonly email:string;
    readonly dni:number;
    readonly password:string;
}