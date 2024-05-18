import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkToken = (req: Request, res: Response, next: NextFunction): Response | void => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).send({ msg: "Not authorized" });
    }

    try {
        jwt.verify(token, process.env.SECRET as string);
        next(); 
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};
