const express = require("express");
const postFood = require("../controllers/food/postFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");
const getCategoryId = require("../controllers/food/getCategoryId");
const verifyJWT = require("../middleware/verifyJWT");

const foodRouter = express.Router();

foodRouter.get("/foodId/:id", getFood);
foodRouter.get("/:categoryId", getCategoryId);
foodRouter.post("/", verifyJWT, postFood);
foodRouter.delete("/:id", verifyJWT, deleteFood);
foodRouter.put("/", verifyJWT, putFood);

module.exports = foodRouter;
