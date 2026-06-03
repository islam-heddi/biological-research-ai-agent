import {Schema, model} from "mongoose"
import bcrypt from "bcrypt"
import type { Document } from "mongoose";

interface IUser {
    _id: string;
    name: string;
    password: string;
    email: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


export {
    UserSchema
}