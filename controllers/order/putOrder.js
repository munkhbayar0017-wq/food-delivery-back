const OrderModel = require("../../schemas/orderSchema");

const putOrder = async (req, res) => {
  const { id, user, totalPrice, foodOrderItems, status } = req.body;
  try {
    const data = await OrderModel.findByIdAndUpdate(
      id,
      {
        user,
        totalPrice,
        foodOrderItems,
        status,
        updatedAt: new Date(),
      },
      { new: true }
    );
    res.status(200).json(`putOrder: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong for delete: ${err}`);
  }
};

module.exports = putOrder;
