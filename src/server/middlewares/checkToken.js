import jwt from "jsonwebtoken";
export const checkToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send({msg: "Not authorized"});

    try {
        jwt.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        res.status(401).json({msg: "Invalid token"});
    }
}