const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log("DATABASE connection succeeesss");
  } catch (err) {
    console.log("DATABASE connection failed", err);
  }
};
module.exports = connectToDB;
