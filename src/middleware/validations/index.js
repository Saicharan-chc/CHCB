const Joi = require("joi");

let validation = {
    validateLogin: async(req, res, next) => {
        try {
            const LoginSchema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().required().min(8).max(20),
            });

            // schema options
            const options = {
                abortEarly: false, // include all errors
                allowUnknown: true, // ignore unknown props
                stripUnknown: true, // remove unknown props
            };

            // validate request body against schema
            const { error, value } = LoginSchema.validate(req.body, options);

            if (error) {
                // on fail return comma separated errors
                const err = new Error();
                err.name = "ValidationError";
                err.message = `Validation error: ${error.details
              .map((x) => x.message)
              .join(", ")}`;
                err.data = error.details;
                next(err);
            } else {
                // on success replace req.body with validated value and trigger next middleware function
                req.body = value;
                next();
            }
        } catch (error) {
            const err = new Error();
            err.name = "ServerError";
            err.message = `User Login error: ${error.message}`;
            next(err);
        }
    }
}

module.exports = validation;