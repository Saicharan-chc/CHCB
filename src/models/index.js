const db = require('../db/dbConfig');


// All Schemas
const UserSchema = require('./user.model');
const RoleSchema = require('./role.model');
const RoleMasterSchema = require('./roleMaster.model');

let dbManager;

exports.getDb1Manager = () => {
    if (dbManager) return Promise.resolve(dbManager);
    return createDB1Manager();
};

async function createDB1Manager() {
    try {
        const dbConn = await db;

        const User = dbConn.define(
            'user',
            UserSchema.schema,
            UserSchema.options
        );

        const RoleMaster = dbConn.define(
            'role_master',
            RoleMasterSchema.schema,
            RoleMasterSchema.options
        )

        const Role = dbConn.define(
            'role',
            RoleSchema.schema,
            RoleSchema.options,
        );
        Role.belongsTo(User, { foreignKey: 'user_id' });
        User.hasMany(Role, { foreignKey: 'user_id' });

        Role.belongsTo(RoleMaster, { foreignKey: 'role_master_id' });
        RoleMaster.hasMany(Role, { foreignKey: 'role_master_id' });


        dbManager = {
            dbConn,
            User,
            Role,
            RoleMaster
        };

        // create tables if not available (Only for Dev purpose)
        // try {
        //     await dbConn.sync({ alter: true });
        //     // Logger.info(LOG_ID, 'DB1 sync successful');
        // } catch (error) {
        //     // Logger.info(LOG_ID, 'Errors occured while syncing DB1');
        //     throw error;
        // }
        return dbManager;
    } catch (error) {
        // Logger.info(LOG_ID, 'Error occured while creating DB Manager !!!');
        console.log(error);
        // process.exit(0);
    }
};

// create DB1 Manager
createDB1Manager();