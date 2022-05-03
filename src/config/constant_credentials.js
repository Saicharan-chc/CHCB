const credentials = {
    PORT: process.env.NODE_ENV == "QA" ? process.env.PORT_QA : process.env.PORT || 5050,
    APP_NAME: process.env.NODE_ENV == "QA" ? process.env.NAME_QA : process.env.NAME || 'Call-Home-Care',
    APP_SHORT_NAME: process.env.NODE_ENV == "QA" ? process.env.SHORT_NAME_QA : process.env.SHORT_NAME || 'CHCB',
    DB_HOST: process.env.NODE_ENV == "QA" ? process.env.DB_HOST_QA : process.env.DB_HOST || 'localhost',
    DB_USER: process.env.NODE_ENV == "QA" ? process.env.DB_USER_QA : process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.NODE_ENV == "QA" ? process.env.DB_PASSWORD_QA : process.env.DB_PASSWORD || '12345678',
    DB_NAME: process.env.NODE_ENV == "QA" ? process.env.DB_NAME_QA : process.env.DB_NAME || 'CHCB',
    POOL: {
        MAX: 10,
        MIN: 3,
        ACQUIRE: 3000,
        IDLE: 100000
    }
};
// console.log(`credentials`, credentials);
module.exports = credentials;