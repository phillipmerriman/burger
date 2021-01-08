// import mysql connection
const connection = require("../config/connection.js");


//mysql queries go here
const orm = {
    // read
    selectAll: function (tableInput, cb) {
        console.log("before query")
        connection.query("SELECT * FROM " + tableInput + ";", (err, res) => {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },

    // create
    insertOne: function () {
        console.log("orm insertOne()");
    },

    // update
    updateOne: function () {
        console.log("orm updateOne()");
    },

    // delete
    deleteOne: function () {
        console.log("orm deleteOne()");
    }
}

// export the orm object for the model (burger.js)
module.exports = orm;