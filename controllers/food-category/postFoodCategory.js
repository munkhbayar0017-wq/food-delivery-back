const FoodCategoryModel = require("../../schemas/foodCategorySchema");
const postFoodCategory = async (req, res) => {
  const { categoryName } = req.body;
  console.log("categoryName", categoryName);
  try {
    const data = await FoodCategoryModel.create({
      categoryName: categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("data", data);
    res.status(201).json(`postFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postFoodCategory;
