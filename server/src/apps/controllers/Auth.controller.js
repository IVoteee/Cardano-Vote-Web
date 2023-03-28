import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../models/index.model";

class AuthController {
    constructor() {
        dotenv.config();
        let refreshToken = [];
    }

    async register(request, response) {
        try {
            const { firstName, lastName, email, password } = request.body;
            // const userFindByEmail = await prisma.user.findFirst({
            //     where: {
            //         email: email,
            //     },
            // });
            const userFindByEmail = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (userFindByEmail) {
                return response.status(404).json({
                    message: "User already exists!",
                });
            }
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            const user = await prisma.user.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashPassword,
                },
            });

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
            const { email } = request.body;
            const user = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (!user) {
                response.status(404).json({
                    message: "User not found!",
                });
            }

            const checkPassword = bcrypt.compareSync(
                request.body.password,
                user.password,
            );
            if (checkPassword) {
                response.sattus(404).json({
                    message: "Wrong password or username!",
                });
            }

            const { password, ...other } = user;

            const accessToken = jwt.sign(
                { id: user.id, role: user.role },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "15s" },
            );

            const refreshToken = jwt.sign(
                { id: user.id, role: user.role },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "365d" },
            );

            response
                .cookie("accessToken", accessToken, {
                    httpOnly: true,
                })
                .status(200)
                .json({ other });
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
