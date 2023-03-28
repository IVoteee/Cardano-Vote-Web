import prisma from "../models/index.model";

class UserController {
    constructor() {}
    async getAllUsers(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }
    async getUserById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async createUser() {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async updateUser(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async deleteUser(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }
}

export default new UserController();
