import type {Request, Response} from "express"
import {User} from "../model/User.js"
import jwt from "jsonwebtoken"
import { AuthRequest } from "../types/auth.types.js"
import bcrypt from "bcrypt"
import { Message } from "../model/Message.js"
import { Channel } from "../model/Channel.js"

const deleteAccount = async (req:Request, res:Response) => {
    const userId = (req as AuthRequest).userId
    const {password} = req.body;
    try {
        const user = await User.findById(userId).select("+password");
        if(!user) return res.status(400).send("user not found");

        const check = await user.comparePassword(password);
        if(!check) return res.status(401).send("Password is wrong!");

        await Message.deleteMany({userId})
        await Channel.deleteMany({userId})
        await User.findByIdAndDelete(userId)

        return res.status(200).send("the user has been deleted");
        
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const updateProfileName = async (req:Request, res:Response) => {
    const userId = (req as AuthRequest).userId;
    const {name, password} = req.body;
    try {
        const user = await User.findById(userId).select("+password");
        if(!user) return res.status(400).send("user not found");

        const check = await user.comparePassword(password);
        if(!check) return res.status(401).send("Password is wrong!");

        const updatedUser = await User.findByIdAndUpdate(userId, {name});
        return res.status(200).send({
            message: "the user has been updated",
            user: updatedUser
        })
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const updateProfileEmail = async (req:Request, res:Response) => {
    const userId = (req as AuthRequest).userId;
    const {email, password} = req.body;
    try {
        const user = await User.findById(userId).select("+password");
        if(!user) return res.status(400).send("user not found");

        const checkEmailExists = await User.find({email})
        if(checkEmailExists.length > 0) return res.status(400).send("email already exists");

        const check = await user.comparePassword(password);
        if(!check) return res.status(401).send("Password is wrong!");

        const updatedUser = await User.findByIdAndUpdate(userId, {email});
        return res.status(200).send({
            message: "the user has been updated",
            user: updatedUser
        })
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}

const updatePassword = async (req:Request,res:Response) => {
    const userId = (req as AuthRequest).userId;
    const {password, newPassword} = req.body;
    try {
        const user = await User.findById(userId).select("+password");
        if(!user) return res.status(400).send("user not found");

        const checkPassword = await user.comparePassword(password);
        if(!checkPassword) return res.status(401).send("password is wrong!");
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatedPassword = await User.findByIdAndUpdate(userId, {password: hashedPassword});   
        return res.status(200).send({
            message: "the user has been updated",
            user: updatedPassword
        })
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}


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
            return res.status(400).send("Invalid credentials: email does not exist");
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send("Invalid credentials: incorrect password");
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {expiresIn: "1h"});
        res.cookie("token", token, {
            httpOnly: true,     // Prevents frontend JS from reading the cookie (Security best practice)
            secure: true,       // REQUIRED for SameSite: 'none'. Means cookie only sends over HTTPS
            sameSite: 'none',   // REQUIRED for cross-site cookies (Vercel to Render)
            maxAge: 3600000     // 1 hour
            });
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
        res.cookie("token", token, {
            httpOnly: true,     // Prevents frontend JS from reading the cookie (Security best practice)
            secure: true,       // REQUIRED for SameSite: 'none'. Means cookie only sends over HTTPS
            sameSite: 'none',   // REQUIRED for cross-site cookies (Vercel to Render)
            maxAge: 3600000     // 1 hour
        });        return res.status(201).send({user, token: token});
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
    getAuth,
    updatePassword,
    updateProfileEmail,
    updateProfileName,
    deleteAccount
}