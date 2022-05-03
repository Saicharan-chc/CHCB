const express = require("express");
const app = express();
require('dotenv').config();
require("./src/db/dbConfig");

// console.logCopy = console.log.bind(console);
// console.log = function(...data) {
//     const currentDate = '[' + new Date().toString() + ']';
//     this.logCopy(`--------${currentDate}------------`, ...data)
// }
const constant = require('./src/config/constant_credentials');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", require("./src/api/routes/route"));

app.listen(constant.PORT, () => {
    console.log(`server started on port ${constant.PORT}`);
});