import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import type {AuthRequest} from "../types/auth.types.js"
const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization?.split(" ")[1];
    const token = req.cookies.token || bearerToken;
    try {
        if(!token) return res.status(401).send("token not found")
        
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY as string)

        if(!decoded) return res.status(401).send("token is dead, or invalid, please reauthenticate");
        (req as AuthRequest).userId = (decoded as any).userId

        next();
    } catch (error: any) {
        return res.status(500).send(error.message);
    }
}


export {
    verifyToken
}