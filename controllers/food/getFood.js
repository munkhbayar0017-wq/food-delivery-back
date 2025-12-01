const FoodModel = require("../../schemas/foodSchema");

const getFood = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await FoodModel.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Food not found" });
    }
    console.log("data------", data);
    res.status(200).json(data);
  } catch (err) {
    console.error("GET food error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
module.exports = getFood;
