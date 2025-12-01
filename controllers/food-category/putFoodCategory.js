const UserModel = require("../../schemas/foodCategorySchema");

const putFoodCategory = async (req, res) => {
  const { id, categoryName } = req.body;
  try {
    const data = await UserModel.findByIdAndUpdate(
      id,
      {
        categoryName,
      },
      { new: true }
    );
    res.status(200).json(`putFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = putFoodCategory;
