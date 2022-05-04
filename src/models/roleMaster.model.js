const { DataTypes } = require('sequelize');
const moment = require('moment')

const RoleMasterSchema = {
    schema: {
        role_master_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        },
        role_name: {
            type: DataTypes.STRING(250),
            defaultValue: '',
        },
        role_desc: {
            type: DataTypes.TEXT,
            defaultValue: ''
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

module.exports = RoleMasterSchema;