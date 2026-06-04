import {Schema, model} from "mongoose"
import { Document } from "mongoose"
import mongoose from "mongoose"

interface IChannel extends Document {
    name: string;
    userId: any;
}

const ChannelSchema = new Schema<IChannel>({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        default: "New channel"
    },
}, {
    timestamps: true
})

const Channel = model("channel", ChannelSchema)

export {
    Channel
}