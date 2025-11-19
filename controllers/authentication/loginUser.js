// const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { password } = req.body;
  const { user } = req;
  try {
    // const user = await UserModel.findOne({ email });
    const hashedPassword = user.password;

    const comparedPassword = await bcrypt.compare(password, hashedPassword);
    console.log("hashedPassword", hashedPassword);
    console.log("password", password);
    if (!comparedPassword) {
      return res.status(400).json("Password not match");
    } else {
      res.status(200).json(`user: ${user}`);
    }
    console.log("comparedPassword", comparedPassword);
    // res.status(200).json("hello ");
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = loginUser;
