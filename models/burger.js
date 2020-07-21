const orm = require("../config/orm.js");

const burger = {
  //select All function
  all: function (cols, vals, cb) {
    orm.all("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  //insert One function
  create: function (objColVals, condition, cb) {
    orm.create("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  // update One function

  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", { devoured: true }, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
