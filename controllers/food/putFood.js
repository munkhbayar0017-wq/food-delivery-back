const FoodModel = require("../../schemas/foodSchema");

const putFood = async (req, res) => {
  const { id, foodName, price, ingredients, createdAt, updatedAt } = req.body;
  console.log("idididididid", id);
  try {
    const data = await FoodModel.findByIdAndUpdate(
      id,
      {
        foodName,
        price,
        ingredients,
        createdAt,
        updatedAt,
      },
      { new: true }
    );
    res.status(200).json(`putFood: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong for delete: ${err}`);
  }
};

module.exports = putFood;
