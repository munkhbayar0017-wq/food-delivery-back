const bcrypt = require("bcrypt");
const { generateToken } = require("../../middleware/generateToken");

const loginUser = async (req, res) => {
  const { password } = req.body;
  const { user } = req;
  try {
    const hashedPassword = user.password;

    const comparedPassword = await bcrypt.compare(password, hashedPassword);

    if (!comparedPassword) {
      return res.status(400).json("Password not match");
    } else {
      const token = generateToken(user);
      console.log("token", token);
      res.status(200).json({ user: user, token: token });
    }
    console.log("comparedPassword", comparedPassword);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = loginUser;
