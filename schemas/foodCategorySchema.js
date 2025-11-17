const { model, Schema } = require("mongoose");

const FoodCategorySchema = new Schema({
  categoryName: {
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
const FoodCategoryModel = model("Food-category", FoodCategorySchema);

module.exports = FoodCategoryModel;
