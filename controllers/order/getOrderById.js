const OrderModel = require("../../schemas/orderSchema");

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user.id; // verifyJWT middleware-аас ирж байгаа гэж үзэж байна

    const data = await OrderModel.findOne({
      _id: orderId,
      user: userId, // ← ЭНД ШҮҮЖ БАЙГАА НЬ!
    })
      .populate("user", "name email phone")
      .populate("foodOrderItems.food");

    if (!data) {
      return res
        .status(404)
        .json({ message: "Order not found or access denied" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
module.exports = getOrderById;
