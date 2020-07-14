const orm = require("../config/orm.js");

const burger = {
  all: function (burger) {
    orm.all("burgers", function (res) {
      burger(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, burger) {
    orm.create("burgers", cols, vals, function (res) {
      burger(res);
    });
  },
  update: function (objColVal, condition, burger) {
    orm.update("burgers", objColVal, condition, function (res) {
      burger(res);
    });
  },
  delete: function (condition, burger) {
    orm.delete("burger", condition, function (res) {
      burger(res);
    });
  },
};

// export to controller
module.exports(burger);
