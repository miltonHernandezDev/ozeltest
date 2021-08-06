import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    
    name:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    dni:{
        type:Number,
    },
    password:{
        type:String,
    }
})