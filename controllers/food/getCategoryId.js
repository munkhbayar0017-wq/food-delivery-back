const FoodModel = require("../../schemas/foodSchema");

const getCategoryId = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const data = await FoodModel.find({ category: categoryId });
    res.status(200).json(data);
  } catch (err) {
    console.error("GET food error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = getCategoryId;
