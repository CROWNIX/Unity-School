require("dotenv").config();

const {Sequelize} = require("sequelize");
const {DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOSTNAME, DB_DIALECT} = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
});

async function run() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

run();
