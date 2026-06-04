import {Schema, model} from "mongoose"
import bcrypt from "bcrypt"


interface IUser {
    _id: string;
    name: string;
    password: string;
    email: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
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

UserSchema.pre("save", async function (this: any, next: any) {
    if (!this.isModified || !this.isModified("password")) return;
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch (err) {
        throw err
    }
});

UserSchema.methods.comparePassword = async function (this: any,candidatePassword: string) {
    if (!this.password) return false;
    return bcrypt.compare(candidatePassword, this.password);
}

const User = model<IUser>("User", UserSchema)
User.createIndexes()
export {
    User
}