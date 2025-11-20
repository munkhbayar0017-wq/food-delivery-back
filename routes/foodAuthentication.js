const express = require("express");
const getFoodCategory = require("../controllers/food-category/getFoodCategory");
const postFoodCategory = require("../controllers/food-category/postFoodCategory");

const foodAuthenticationRouter = express.Router();

foodAuthenticationRouter.get("/get-category", getFoodCategory);
foodAuthenticationRouter.post("/post-category", postFoodCategory);

module.exports = foodAuthenticationRouter;
