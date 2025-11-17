const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const getFoodCategory = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await FoodCategoryModel.findById(id);
    res.status(200).json(`getFoodCategory: ${data}`);
    if (!data) {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = getFoodCategory;
