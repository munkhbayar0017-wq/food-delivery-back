const FoodCategoryModel = require("../../schemas/foodCategorySchema");
const postFoodCategory = async (req, res) => {
  const { categoryName, createdAt, updatedAt } = req.body;
  try {
    const data = await FoodCategoryModel.create({
      categoryName: categoryName,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    res.status(201).json(`postFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postFoodCategory;
