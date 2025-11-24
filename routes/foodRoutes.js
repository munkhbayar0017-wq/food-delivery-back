const express = require("express");
const postFood = require("../controllers/food/postFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.post("/", postFood);
foodRouter.delete("/:id", deleteFood);
foodRouter.put("/", putFood);

module.exports = foodRouter;
