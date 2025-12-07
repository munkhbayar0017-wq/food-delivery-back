const { model, Schema } = require("mongoose");
const FoodOrderItem = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "Food",
  },
  quantity: {
    type: Number,
    required: [true],
  },
});
const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalPrice: {
      type: Number,
      required: [true],
    },
    foodOrderItems: {
      type: [FoodOrderItem],
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);
const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
