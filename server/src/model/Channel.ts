import {Schema, model} from "mongoose"
import { Document } from "mongoose"

interface IChannel extends Document {
    name: string;
}

const ChannelSchema = new Schema<IChannel>({
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