const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const getFoodCategory = async (req, res) => {
  try {
    const data = await FoodCategoryModel.find();
    res.status(200).json(data);
  } catch (err) {
    console.error("GET category error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = getFoodCategory;
