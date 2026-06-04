import {Schema, model} from 'mongoose';
import Document from "mongoose";
interface IResearch extends Document {
    name: string;
    url?: string;
    authors?: string;
    abstractResearch?: string;
    dateResearch?: Date;
};

const ResearchSchema = new Schema<IResearch>({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
    },
    authors: {
        type: String,
        default: ""
    },
    abstractResearch: {
        type: String
    },
    dateResearch: {
        type: Date,
    },
})

const Research = model("Research", ResearchSchema)

export {
    Research
}