const OrderModel = require("../../schemas/orderSchema");
const postOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;
  try {
    const data = await OrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
    });
    console.log("data", data);
    res.status(201).json(data);
  } catch (err) {
    console.log("error postOrder", err);
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postOrder;
