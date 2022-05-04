const { successResponse, errorResponse } = require('../../../helpers').responseHelper;
const UserService = require('../../services/user');

let userController = {
    register: async(req, res, next) => {
        try {
            let data = await UserService.createUser(req);
            return successResponse(req, res, data.data, data.message);
        } catch (error) {
            next(error);
        }
    },
    login: async(req, res, next) => {
        try {
            let data = await UserService.loginUser(req);
            if (data.status == true) return successResponse(req, res, data.data, data.message);
            return errorResponse(req, res, data.data, data.message);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = userController;