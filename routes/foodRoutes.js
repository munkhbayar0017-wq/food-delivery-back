const express = require("express");
const postFood = require("../controllers/food/postFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");
const getCategoryId = require("../controllers/food/getCategoryId");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.get("/:categoryId", getCategoryId);
foodRouter.post("/", postFood);
foodRouter.delete("/:id", deleteFood);
foodRouter.put("/", putFood);

module.exports = foodRouter;
