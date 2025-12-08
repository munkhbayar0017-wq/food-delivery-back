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
    address: {
      type: String,
      required: [true],
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
