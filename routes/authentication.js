const express = require("express");
const postUser = require("../controllers/user/postUser");
const loginUser = require("../controllers/authentication/loginUser");
const isUserExist = require("../middleware/isUserExist");
const isEmailExist = require("../middleware/isEmailExist");

const authenticationRouter = express.Router();

authenticationRouter.post("/login", isUserExist, loginUser);
authenticationRouter.post("/sign-up", isEmailExist, postUser);

module.exports = authenticationRouter;
