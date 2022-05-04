const { DataTypes } = require('sequelize');
const moment = require('moment')

const roleSchema = {
    schema: {
        role_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        },
        // role_master_id: {
        //     type: DataTypes.BIGINT,
        //     allowNull: false,
        //     defaultValue: 0
        // },
        // user_id: {
        //     type: DataTypes.BIGINT,
        //     allowNull: false,
        //     defaultValue: 0
        // },
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

module.exports = roleSchema;