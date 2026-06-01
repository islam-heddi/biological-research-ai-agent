import {Schema, model} from 'mongoose';

const ResearchSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    authors: [{
        type: String,
        default: ""
    }],
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