const orm = require("../config/orm.js");

const burger = {
  all: function (burger) {
    orm.all("burgers", function (res) {
      burger(res);
    });
  },
  create: function (cols, vals, burger) {
    orm.create("burgers", cols, vals, function (res) {
      burger(res);
    });
  },
  // update: function(objColVal, condition, burger) {
  //     orm.update("burgers", objColVal)
  // }
};
