const OrderModel = require("../../schemas/orderSchema");

const deleteOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await OrderModel.findByIdAndDelete(id);
    res.status(200).json(`deleteOrder: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteOrder;
