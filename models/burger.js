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

  // update One function
  // getting not a function error

  updateOne: function (id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", { devoured: true }, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
