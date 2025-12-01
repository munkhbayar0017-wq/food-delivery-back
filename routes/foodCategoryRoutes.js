const express = require("express");
const postFoodCategory = require("../controllers/food-category/postFoodCategory");
const getFoodCategory = require("../controllers/food-category/getFoodCategory");
const deleteFoodCategory = require("../controllers/food-category/deleteFoodCategory");
const putFoodCategory = require("../controllers/food-category/putFoodCategory");
const verifyJWT = require("../middleware/verifyJWT");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", verifyJWT, putFoodCategory);

foodCategoryRouter.delete("/:id", verifyJWT, deleteFoodCategory);

foodCategoryRouter.post("/", verifyJWT, postFoodCategory);

module.exports = foodCategoryRouter;
