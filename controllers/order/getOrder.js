const OrderModel = require("../../schemas/orderSchema");

const getOrder = async (req, res) => {
  // const { id } = req.body;

  // try {
  //   const data = await OrderModel.findById(id).populate("user");
  //   if (!data) {
  //     return res.status(404).json({ message: "Order not found" });
  //   }
  //   console.log("data------", data);
  //   res.status(200).json(data);
  // } catch (err) {
  //   console.error("GET food error:", err);
  //   res.status(500).json({ message: "Server error", error: err.message });
  // }
  try {
    const data = await OrderModel.find().populate("user");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
module.exports = getOrder;
