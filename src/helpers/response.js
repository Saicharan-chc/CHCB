const constant = require('../config/constant_credentials');

exports.successResponse = async(req, res, data, message, status = constant.StatusCodes.OK) => {
    // let selfLink = req.hostname + ':' + process.env.APP_PORT + req.originalUrl;
    const link = [];
    return res.status(status).json({
        success: true,
        status,
        message,
        data,
    });
};

exports.errorResponse = (res, error, message, status = constant.StatusCodes.UNAUTHORIZED) => {

    return res.status(status).json({
        success: false,
        status,
        message,
        error,
    });
}