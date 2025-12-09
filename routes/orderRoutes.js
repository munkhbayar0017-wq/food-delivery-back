const express = require("express");
const postOrder = require("../controllers/order/postOrder");
const getOrder = require("../controllers/order/getOrder");
const deleteOrder = require("../controllers/order/deleteOrder");
const putOrder = require("../controllers/order/putOrder");
const verifyJWT = require("../middleware/verifyJWT");
const getOrderById = require("../controllers/order/getOrderById");

const orderRouter = express.Router();

orderRouter.get("/", verifyJWT, getOrder);

orderRouter.get("/:id", verifyJWT, getOrderById);

orderRouter.put("/", verifyJWT, putOrder);

orderRouter.delete("/", verifyJWT, deleteOrder);

orderRouter.post("/", verifyJWT, postOrder);

module.exports = orderRouter;
