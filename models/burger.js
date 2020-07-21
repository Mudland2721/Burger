const orm = require("../config/orm.js");

// The variables cols and vals are arrays.
const burger = {
  //select All function
  all: function (cols, vals, cb) {
    orm.all("burgers", cols, vals, function (res) {
      // console.log(`HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);

      cb(res);
    });
  },

  //insert One function
  insertOne: function (objColVals, condition, cb) {
    orm.insertOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  //update One function
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

