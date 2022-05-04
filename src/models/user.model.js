const { DataTypes } = require('sequelize');

const UserSchema = {
    schema: {
        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(250),
            defaultValue: ''
        },
        first_name: {
            type: DataTypes.STRING(150),
            defaultValue: ''
        },
        last_name: {
            type: DataTypes.STRING(150),
            defaultValue: ''
        },
        dob: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        country_code: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        about: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        is_email_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_phone_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        created_at: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        },
        updated_at: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        }
    },
    options: {
        freezeTableName: true,
        timestamps: false
    },
};

module.exports = UserSchema;