const express = require("express");

const router = express.Router();

// import burger.js
const burger = require("../models/burger");

// routes
router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObj = {
      burger: data,
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (res) {
      res.json({ id: res.insertId });
    }
  );
});
