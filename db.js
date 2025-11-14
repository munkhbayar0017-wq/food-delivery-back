const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bayaraa:bayaraa0017@food-delivery.rdkyb9u.mongodb.net/"
    );
    console.log("DATABASE connection succeeesss");
  } catch (err) {
    console.log("DATABASE connection failed", err);
  }
};
module.exports = connectToDB;
