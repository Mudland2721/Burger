// Import MYSQL connection.
var connection = require("../config/connection.js");

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

const orm = {
  //select all function
  all: function (tableInput, burger) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      burger(res);
    });
  },
  //insert one function
  create: function (table, cols, val, burger) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(val.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, val, function (err, res) {
      if (err) {
        throw err;
      }
      burger(res);
    });
  },
  update: function (table, objColVals, condition, burger) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      burger(res);
    });
  },
};
// Export the orm object for the model in burger.js
module.exports = orm;
