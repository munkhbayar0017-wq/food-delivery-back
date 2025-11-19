const UserModel = require("../schemas/userSchema");

const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email require");
  }
  const user = await UserModel.findOne({ email: email });
  console.log("user is", user);
  if (!user) {
    res.status(404).json("User not found");
  } else {
    req.user = user;
    next();
  }
};
module.exports = isUserExist;
