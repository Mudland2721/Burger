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
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

//i can get to homepage -- it doesnt like the all orm
// router.get("/", function (req, res) {
//   console.log("here we GOOOOOOOOOOOOOOOOOOO");
//   res.render("index");
// });

router.post("/api/burger", function (req, res) {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (res) {
      res.json({ id: res.insertId });
    }
  );
});

router.put("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("HERE WE GOOOOOOOOOOOOOOOOOO!!!!!!!!", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (res) {
      if (res.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
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
