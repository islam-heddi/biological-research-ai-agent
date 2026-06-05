import type { Request, Response } from "express";
import { Message } from "../model/Message.js";
import { AuthRequest } from "../types/auth.types.js";
import { MessageType } from "../types/message.types.js";
import { generateMessage } from "../bot/openai.js";
import { Research } from "../model/research.js";
import { Channel } from "../model/Channel.js";

const getMessages = async (req: Request, res: Response) => {
    const userId = (req as AuthRequest).userId
    const {channelId} = req.params;
    try {
        if(!channelId) return res.status(400).send("channel id is missing");
        const messages = await Message.find({
            userId,
            channelId
        })

        return res.status(201).send(messages)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createMessageREST = async (req:Request, res:Response) => { // this is for REST API
    "implemented for REST API"
    const userId = (req as AuthRequest).userId
    const { content, channelId} = req.body;
    try {
        if(content === "") return res.status(400).send("content is empty");
        if(!channelId) return res.status(400).send("channel id is missing");
        const checkChannel = await Channel.findById(channelId);
        if(!checkChannel) return res.status(404).send("channel has not been created or an invalid channel id");
        const chatsChannel = await Message.find({channelId});
        const newMessage = await Message.create({
            role: "user",
            content: content,
            userId: userId,
            channelId: channelId
        })

        const biologicalData = await Research.find();

        const historyMessages = chatsChannel.map(value => {
            return {
                content: value.content,
                role: value.role
            }
        })

        const reply = await generateMessage(content, biologicalData, historyMessages)
        if(!reply) return res.status(400).send("try again, no reply has been generated");
        const AiMessage = await Message.create({
            role: "system",
            content: reply as string,
            userId: userId,
            channelId: channelId
        })
        return res.status(201).send({
            message: newMessage,
            AIReply: AiMessage
        })
        
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createMessage = async (message: MessageType) => { // this is for the socket
    "this is for the socket.io"
    try {
        if(message.content === "") throw Error("content is empty");
        if(!message.channelId) throw Error("channel id is empty");
        const {content, userId, channelId} = message;
        const checkChannel = await Channel.findById(channelId);
        if(!checkChannel) throw Error("channel has not been created or an invalid channel id");
        const chatsChannel = await Message.find({channelId});
        const newMessage = await Message.create({
            role: "user",
            content: content,
            userId: userId,
            channelId: channelId
        })

        const biologicalData = await Research.find();

        const historyMessages = chatsChannel.map(value => {
            return {
                content: value.content,
                role: value.role
            }
        })

        const reply = await generateMessage(content, biologicalData, historyMessages)
        if(!reply) throw Error("try again, no reply has been generated");
        const AiMessage = await Message.create({
            role: "system",
            content: reply as string,
            userId: userId,
            channelId: channelId
        })

        return {
            message: newMessage,
            AIReply: AiMessage
        }
        
    } catch (error) {
        throw error
    }
}

export {
    getMessages,
    createMessage,
    createMessageREST
}