const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let burgerObj = {
      burgerObj: data,
    };
    res.render("index", burgerObj);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(["burger_name"], [req.body.name], function (dbRes) {
    res.json({ id: dbRes.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  let id = req.params.id;

  burger.update(id, function (data) {
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (data) {
    if (data.affectedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});

// export routes
module.exports = router;
