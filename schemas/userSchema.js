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
    required: [true],
  },
  address: {
    type: String,
    required: [true],
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
    required: [true],
  },
  isVerified: {
    type: Boolean,
    required: [true],
  },
});
const UserModel = model("User", UserSchema);

module.exports = UserModel;
