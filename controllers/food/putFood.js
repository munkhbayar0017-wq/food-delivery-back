const FoodModel = require("../../schemas/foodSchema");

const putFood = async (req, res) => {
  const { id, foodName, price, ingredients, category, image } = req.body;
  try {
    const data = await FoodModel.findByIdAndUpdate(
      id,
      {
        foodName,
        price,
        ingredients,
        category,
        image,
        updatedAt: new Date(),
      },
      { new: true }
    );
    res.status(200).json(`putFood: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong for delete: ${err}`);
  }
};

module.exports = putFood;
