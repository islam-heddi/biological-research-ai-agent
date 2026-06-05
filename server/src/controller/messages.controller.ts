import type { Request, Response } from "express";
import { Message } from "../model/Message.js";
import { AuthRequest } from "../types/auth.types.js";
import { MessageType } from "../types/message.types.js";

const getMessages = async (req: Request, res: Response) => {
    const userId = (req as AuthRequest).userId
    const {content, role, channelId} = req.body;
    try {
        if(content === "") return res.status(400).send("content is empty");
        const newMessage = await Message.create({
            content,
            role,
            channelId,
            userId
        })

        return res.status(201).send(newMessage)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createMessageREST = async (req:Request, res:Response) => { // this is for REST API
    "implemented for REST API"
    const {role, content, userId, channelId} = req.body;
    try {
        if(content === "") return res.status(400).send("content is empty");
        const newMessage = await Message.create({
            role: role,
            content: content,
            userId: userId,
            channelId: channelId
        })

        return res.status(201).send(newMessage)
        
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createMessage = async (message: MessageType) => { // this is for the socket
    "this is for the socket.io"
    try {
        if(message.content === "") throw Error("content is empty");
        const newMessage = await Message.create({
            role: message.role,
            content: message.content,
            userId: message.userId,
            channelId: message.channelId
        })

        return newMessage
        
    } catch (error) {
        throw error
    }
}

export {
    getMessages,
    createMessage,
    createMessageREST
}