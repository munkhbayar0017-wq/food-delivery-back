const OrderModel = require("../../schemas/orderSchema");

const getOrder = async (req, res) => {
  try {
    const data = await OrderModel.find()
      .populate("user")
      .populate("foodOrderItems.food");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
module.exports = getOrder;
