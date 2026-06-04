import type { Request, Response } from "express";
import { Channel } from "../model/Channel.js";
import { AuthRequest } from "../types/auth.types.js";

const createChannel = async (req: Request, res:Response) => {
    const userId = (req as AuthRequest).userId
    const {name} = req.body;
    try {
        const channel = new Channel({
            name,
            userId
        })

        await channel.save()

        res.status(201).send(channel)
        
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const updateChannel = async (req: Request, res: Response) => {
    const userId = (req as AuthRequest).userId
    const id = req.params.id;
    const {name} = req.body;
    try {
        await Channel.updateOne({_id: id, userId}, {name})

        return res.status(200).send("updated succesfully")
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const getChannels = async (req: Request, res: Response) => {
    const userId = (req as AuthRequest).userId

    try {
        const channels = await Channel.find({userId})

        return res.status(200).send(channels)
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}


export {
    getChannels,
    createChannel,
    updateChannel
}