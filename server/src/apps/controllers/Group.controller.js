import prisma from "../models/index.model";

class GroupController {
    constructor() {}

    async getAllGroup(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async getGroupById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async createGroup() {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async updateGroupById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async deleteGroupById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }
}

export default new GroupController();
