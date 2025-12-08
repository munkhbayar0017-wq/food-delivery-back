const OrderModel = require("../../schemas/orderSchema");
const postOrder = async (req, res) => {
  console.log(req.user);
  const { totalPrice, foodOrderItems, status, address } = req.body;
  try {
    const data = await OrderModel.create({
      user: req.user._id,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
      address: address,
    });
    console.log("data", data);
    res.status(201).json(data);
  } catch (err) {
    console.log("error postOrder", err);
    res.status(500).json(`Something went wrong: ${err}`);
  }
};
module.exports = postOrder;
