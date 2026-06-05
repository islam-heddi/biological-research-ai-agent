import {Schema, model} from "mongoose";
import mongoose from "mongoose";
import { Document } from "mongoose";

interface IMessage extends Document {
    content: string;
    role: "user" | "system";
    userId: any;
    channelId: any;
}

const MessageSchema = new Schema<IMessage>({
    content: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    role: {
        type: String,
        require: true
    },
    channelId: {
        type: mongoose.Schema.ObjectId,
        ref: "Channel",
        require: true
    }
}, {
    timestamps: true
})

const Message = model("Message", MessageSchema)


export {
    Message
}

