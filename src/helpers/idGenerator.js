// global imports
const { Snowflake } = require('nodejs-snowflake');

// require db
const db = require('../db/dbConfig');
const user = db.users;

const config = {
    custom_epoch: Date.now(),
    instance_id: 4094
}

exports.generateId = async() => {
    const userUnique = new Snowflake(config);
    const uniqueId = await userUnique.getUniqueID();
    console.log(`uniqueId`, uniqueId);
    // let data = await user.findByPk(uniqueId);
    // if (data) await this.generateId();
    return uniqueId;
}