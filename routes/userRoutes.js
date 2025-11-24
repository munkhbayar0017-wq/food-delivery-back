const express = require("express");
const postUser = require("../controllers/user/postUser");
const getUser = require("../controllers/user/getUser");
const deleteUser = require("../controllers/user/deleteUser");
const putUser = require("../controllers/user/putUser");

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.put("/", putUser);

userRouter.delete("/", deleteUser);

// userRouter.post("/", postUser);

module.exports = userRouter;
