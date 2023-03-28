import jwt from "jsonwebtoken";
import dotenv from "dotenv";
class Authenticate {
    constructor() {
        dotenv.config();
    }
    token(request, response, next) {
        const authHeader = request.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            response.status.json({
                message: "User not authenticated",
            });
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
            if (error) {
                return response.status(401);
            }

            request.user = user;
            next();
        });
    }
}
