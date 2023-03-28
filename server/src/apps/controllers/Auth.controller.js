import dotenv from "dotenv";
import prisma from "../models/index.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    constructor() {
        dotenv.config();
    }

    async register(request, response) {
        try {
            const { firstName, lastName, email, password } = request.body;
            const userFindByEmail = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (userFindByEmail) {
                response.status(404).json({
                    message: "User already exists!",
                });
            }
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            const user = await prisma.user.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashPassword,
            });
            console.log(user);

            response.status(200).json({
                message: "User has been created.",
            });
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async login(request, response) {
        try {
            const { email, password } = request.body;
            const userFindByEmail = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (!userFindByEmail) {
                response.status(404).json({
                    message: "User not found!",
                });
            }

            const checkPassword = bcrypt.compareSync(password, userFindByEmail.password);
            if(!checkPassword) {
                response.sattus(404).json({
                    message: "Wrong password or username!"
                })
            }

        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async logout(request, response) {
        try {
            response
                .clearCookie("accessToken", {
                    secure: true,
                    sameSite: "none",
                })
                .status(200)
                .json({
                    message: "User has been logged out.",
                });
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }
}

export default new AuthController();
