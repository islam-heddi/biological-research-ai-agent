import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import type {AuthRequest} from "../types/auth.types.js"
const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization?.split(" ")[1];
    const token = (req as any).cookies?.token || bearerToken;
    try {
        if(!token) return res.status(401).send("token not found")
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

        if(!decoded) return res.status(401).send("token is dead, or invalid, please reauthenticate");
        (req as AuthRequest).userId = (decoded as any).id

        next();
    } catch (error: any) {
        return res.status(401).send(error.message);
    }
}


export {
    verifyToken
}