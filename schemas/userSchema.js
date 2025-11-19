const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  isVerified: {
    type: Boolean,
  },
});
const UserModel = model("User", UserSchema);

module.exports = UserModel;
