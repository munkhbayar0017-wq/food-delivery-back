const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");
const postUser = async (req, res) => {
  const { email, password } = req.body;

  const SALT_ROUND = 10;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  console.log("password", password);
  console.log("hashedPassword", hashedPassword);

  try {
    const data = await UserModel.create({
      email: email,
      password: hashedPassword,
    });
    res.status(201).json(`postUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postUser;
