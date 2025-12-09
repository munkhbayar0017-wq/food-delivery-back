const OrderModel = require("../../schemas/orderSchema");

const putOrder = async (req, res) => {
  const { id, status } = req.body;
  try {
    const data = await OrderModel.findByIdAndUpdate(
      id,
      {
        status,
        updatedAt: new Date(),
      },
      { new: true }
    );
    res.status(200).json(`putOrder: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong for putOrder: ${err}`);
  }
};

module.exports = putOrder;
