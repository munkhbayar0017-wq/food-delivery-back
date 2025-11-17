const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const deleteFoodCategory = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await FoodCategoryModel.findByIdAndDelete(id);
    res.status(200).json(`deleteFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteFoodCategory;
