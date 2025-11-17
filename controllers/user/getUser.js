const UserModel = require("../../schemas/userSchema");

const getUser = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await UserModel.findById(id);
    res.status(200).json(`getUser: ${data}`);
    if (!data) {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = getUser;
