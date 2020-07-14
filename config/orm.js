// need three function
//selectAll()
//insertOne()
//updateOne()

// Import MYSQL connection.
var connection = require("../config/connection.js");
const { query } = require("express");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

//select all function
const orm = {
  selectAll: function (tableInput, burger) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      burger(res);
    });
  },
};

