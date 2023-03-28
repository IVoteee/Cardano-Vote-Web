import prisma from "../models/index.model";

class ElectionCommissionController {
    constructor() {}

    async getAllElectionCommissions(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async getElectionCommissionById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async createElectionCommission(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async updateElectionCommission(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }

    async deleteElectionCommissionById(request, response) {
        try {
        } catch (error) {
            response.status(500).json({
                message: error,
            });
        }
    }
}

export default new ElectionCommissionController();
