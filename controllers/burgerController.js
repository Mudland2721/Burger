const express = require("express");

const router = express.Router();

// import burger.js
const burger = require("../models/burger");

router.get("/", function (req, res) {
  // console.log(`HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
  burger.all(function (data) {
    let burgerObj = {
      burgerObj: data,
    };
    /// not getting here
    res.render("index", burgerObj);

    console.log(burgerObj);
  });
});

router.post("/api/burger", function (req, res) {
  // console.log(`HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);

  burger.create(["name", "devoured"], [req.body.name, req.body.id], function (
    res
  ) {
    res.json({ id: res.insertId });
  });
  // console.log(`HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
});

router.put("/api/burger/:id", function (req, res) {
  let id = req.params.id;

  burger.updateOne(id, function (res) {
    if (res.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (res) {
    if (res.affectedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});

// export routes
module.exports = router;
