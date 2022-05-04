const moment = require('moment');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const constant = require('../../../config/constant_credentials');
const { getDb1Manager } = require('../../../models');
const { generateId } = require('../../../helpers').IdGeneratorHelper;

let UserServices = {
    createUser: async(req) => {
        try {
            const {
                title,
                first_name,
                last_name,
                dob,
                email,
                password,
                country_code,
                phone_number,
                about,
            } = req.body;
            created_at = moment(moment.now()).unix();
            updated_at = moment(moment.now()).unix();
            let id = await generateId();
            const { User } = await getDb1Manager();
            // Create a user Obj
            const userData = {
                user_id: id,
                title,
                first_name,
                last_name,
                dob,
                email,
                password,
                country_code,
                phone_number,
                about,
                created_at,
                updated_at
            };
            console.log('userData', userData)
                // insert user
            let insertUser = User.create(userData);
            if (insertUser) {
                return {
                    message: 'User Inserted..!',
                    status: true,
                    data: insertUser
                }
            } else {
                return {
                    message: 'User Not Inserted..!',
                    status: true,
                    data: insertUser || []
                }
            }
        } catch (error) {
            return {
                message: 'Error While Inserting User..!',
                status: true,
                data: error
            }
        }
    },
    loginUser: async(req) => {
        const {
            User,
            Role,
            RoleMaster
        } = await getDb1Manager();
        console.log('user', User)
        const { email, password } = req.body;
        let findUser = await User.findOne({ where: { email: email } });
        if (!findUser) {
            return {
                message: 'Invalid Credentials',
                status: false,
                data: {}
            }
        }

        if (findUser.is_active === false || null) {
            return {
                message: 'Your Account Is Deactivated , Please Contact To Administartor.',
                status: false,
                data: {}
            }
        }
        if (!(await bcrypt.compare(req.body.password, findUser.password))) {
            return {
                message: "Invalid Password.",
                status: false,
                data: {},
            };
        }
        let roleFind = await Role.findOne({ where: { user_id: findUser.user_id } }, { include: RoleMaster });
        let roleMasterFind = await RoleMaster.findOne({ where: { role_master_id: roleFind.role_master_id } });
        const tokenData = {
            userid: findUser.user_id,
            role: roleMasterFind.role_name,
            role_id: roleFind.role_id,
            role_master_id: roleMasterFind.role_master_id
        }
        const token = jwt.sign(tokenData, constant.SECRET_TOKEN, {
            expiresIn: 60 * 60 * 12
        });
        return {
            message: "Login Successfully.",
            status: true,
            data: {
                token,
                userid: findUser.user_id,
                email_verified: findUser.is_email_verified,
                phone_verified: findUser.is_phone_verified,
            }
        };

    }
}
module.exports = UserServices;