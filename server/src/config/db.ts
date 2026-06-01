import mongoose from "mongoose"

async function connectDb(){
    try {
        const res = await mongoose.connect(process.env.DB_URL as string)
        console.log("Mongo db established")
        return res;
    } catch (error) {
        console.log("Mongo db connection error");
    }
}

export {connectDb}