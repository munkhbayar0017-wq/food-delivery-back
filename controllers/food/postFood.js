const FoodModel = require("../../schemas/foodSchema");
const postFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  console.log("req.body", req.body);
  try {
    const data = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    console.log("data", data);
    res.status(201).json(data);
  } catch (err) {
    console.log("errorrrrr", err);
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postFood;
