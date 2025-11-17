const express = require("express");
const postFoodCategory = require("../controllers/food-category/postFoodCategory");
const getFoodCategory = require("../controllers/food-category/getFoodCategory");
const deleteFoodCategory = require("../controllers/food-category/deleteFoodCategory");
const putFoodCategory = require("../controllers/food-category/putFoodCategory");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", putFoodCategory);

foodCategoryRouter.delete("/", deleteFoodCategory);

foodCategoryRouter.post("/", postFoodCategory);

module.exports = foodCategoryRouter;
