const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const deleteFoodCategory = async (req, res) => {
  const { id } = req.params;
  console.log("idididididid food category", id);
  try {
    const data = await FoodCategoryModel.findByIdAndDelete(id);
    res.status(200).json(`deleteFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteFoodCategory;
