const FoodModel = require("../../schemas/foodSchema");

const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await FoodModel.findByIdAndDelete(id);
    res.status(200).json(`deleteFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteFood;
