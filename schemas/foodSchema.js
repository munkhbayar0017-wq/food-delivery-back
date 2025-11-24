const { model, Schema } = require("mongoose");

const FoodSchema = new Schema({
  foodName: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  image: {
    type: String,
  },
  ingredients: {
    type: String,
    required: [true],
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  updatedAt: {
    type: Date,
    required: [true],
  },
});
const FoodModel = model("Food", FoodSchema);

module.exports = FoodModel;
