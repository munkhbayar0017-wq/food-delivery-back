const UserModel = require("../../schemas/userSchema");

const putUser = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await UserModel.findOneAndUpdate(id);
    res.status(200).json(`putUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = putUser;
