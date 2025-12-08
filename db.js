const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE connection succeeesss");
  } catch (err) {
    console.log("DATABASE connection failed", err);
  }
};
module.exports = connectToDB;
