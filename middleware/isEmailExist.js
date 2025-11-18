const UserModel = require("../schemas/userSchema");

const isEmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email require");
  }
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    req.user = user;
    next();
  } else {
    res.status(404).json("User already found");
  }
};
module.exports = isEmailExist;
