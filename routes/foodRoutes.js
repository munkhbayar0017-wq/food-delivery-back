const express = require("express");
const postFood = require("../controllers/food/postFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");
const getCategoryId = require("../controllers/food/getCategoryId");
const verifyJWT = require("../middleware/verifyJWT");
const getFoodId = require("../controllers/food/getFoodId");

const foodRouter = express.Router();

foodRouter.get("/foodId/:id", getFood);
// foodRouter.get("/:id", getFoodId);
foodRouter.get("/:categoryId", getCategoryId);
foodRouter.post("/", verifyJWT, postFood);
foodRouter.delete("/:id", verifyJWT, deleteFood);
foodRouter.put("/", verifyJWT, putFood);

module.exports = foodRouter;
