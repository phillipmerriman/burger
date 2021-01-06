// set up mysql connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8080,
    user: "root",
    password: "vegetable",
    database: "burgers_db"
});

// Make connection
connection.connect ( (err) => {
    if (err) {
        console.error("error encoding: " + err.stack);
    }

    console.log("connected as id " + connection.threadId);
});

// Export
module.exports = connection;