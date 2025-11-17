const UserModel = require("../../schemas/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await UserModel.findByIdAndDelete(id);
    res.status(200).json(`deleteUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteUser;
