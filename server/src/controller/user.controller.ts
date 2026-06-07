import type {Request, Response} from "express"
import {User} from "../model/User.js"
import jwt from "jsonwebtoken"
import { AuthRequest } from "../types/auth.types.js"

const getAuth = async (req:Request, res: Response) => {
    const userId = (req as AuthRequest).userId
    try{
        const user = await User.findById(userId)

        if(!user) return res.status(400).send("user not found");

        return res.status(200).send(user);
    }catch(error: any) {
        return res.status(500).send(error.message)
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email}).select("+password");
        if (!user) {
            return res.status(400).send("Invalid credentials");
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send("Invalid credentials");
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {expiresIn: "1h"});
        res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === "production"});
        return res.status(200).send({user,token});
    } catch (error: any) {
        return res.status(500).send(error.message || "Server error")
    }
}

const register = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    try {
        if(!name || !email || !password) {
            return res.status(400).send("Please provide all required fields");
        }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).send("User already exists");
        }
        const user = new User({name, email, password});
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {expiresIn: "1h"});
        res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === "production"});
        return res.status(201).send({user, token: token});
    } catch (error: any) {
        return res.status(500).send(error.message || "Server error")
    }
}

const deconnect = async (_req: Request, res: Response) => {
    res.clearCookie("token");
    return res.status(200).send("Logged out successfully");
}

export {
    register,
    login,
    deconnect,
    getAuth
}