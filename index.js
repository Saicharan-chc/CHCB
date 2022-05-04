const express = require("express");
const compression = require('compression');
const cors = require('cors');

const app = express();
require('dotenv').config();
require("./src/db/dbConfig");

// console.logCopy = console.log.bind(console);
// console.log = function(...data) {
//     const currentDate = '[' + new Date().toString() + ']';
//     this.logCopy(`--------${currentDate}------------`, ...data)
// }
const constant = require('./src/config/constant_credentials');

const { generateId } = require('./src/helpers/index').IdGeneratorHelper;

require('./src/models/index');
// pre-routes
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./src/api/routes"));

app.listen(constant.PORT, () => {
    console.log(`server started on port ${constant.PORT}`);
});