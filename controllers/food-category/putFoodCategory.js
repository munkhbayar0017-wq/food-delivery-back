const UserModel = require("../../schemas/foodCategorySchema");

const putFoodCategory = async (req, res) => {
  const { id } = req.body;
  console.log("idididididid", id);
  try {
    const data = await UserModel.findOneAndUpdate(id);
    res.status(200).json(`putFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = putFoodCategory;
