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
// const UserModel = require("../schemas/userSchema");

// const isEmailExist = async (req, res, next) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required" }); // 400 Bad Request
//     }

//     const user = await UserModel.findOne({ email });

//     if (user) {
//       return res.status(409).json({ message: "User already exists" }); // 409 Conflict
//     }

//     // Email олдсонгүй → signup үргэлжлүүлэх боломжтой
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = isEmailExist;
