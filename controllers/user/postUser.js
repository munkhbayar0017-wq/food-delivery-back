const UserModel = require("../../schemas/userSchema");
const postUser = async (req, res) => {
  const { email, password, phoneNumber, address, role, isVerified } = req.body;
  try {
    const data = await UserModel.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      role: role,
      isVerified: isVerified,
    });
    res.status(201).json(`postUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postUser;
