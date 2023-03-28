import prisma from "../models/index.model";

class UserController {
    constructor() {}
    async getAllUsers(request, response) {
        try {
        } catch (error) {
            response.status(200).json({
                message: error,
            });
        }
    }
    async getUserById(request, response) {
        try {
        } catch (error) {
            response.status(200).json({
                message: error,
            });
        }
    }

    async createUser() {
        
    }
}

export default new UserController();
