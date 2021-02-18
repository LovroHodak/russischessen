const express = require("express");
const router = express.Router();
const FoodModel = require("../models/Food.model");

router.get("/foods", (req, res) => {
    console.log('req.body GET', req.body)
    FoodModel.find()
      .then((foods) => {
        res.status(200).json(foods);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      });
  });




module.exports = router;