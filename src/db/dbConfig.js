const constant = require('../config/constant_credentials');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(constant.DB_NAME, constant.DB_USER, constant.DB_PASSWORD, {
    host: constant.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: constant.POOL.MAX,
        min: constant.POOL.MIN,
        acquire: constant.POOL.ACQUIRE,
        idle: constant.POOL.IDLE,
    },
    dialectOptions: {
        useUTC: false,
        dateString: true,
        typeCast: true // for reading from db
    }
});

sequelize.authenticate().then(() => {
    console.log(`--${new Date().toString()}-->>>>>> Successfully Connected.`);
}).catch((err) => {
    console.log(`err`, err);
});

module.exports = sequelize;