import Order from "../models/orders.js";

export const placeOrderController = (req, res) => {
  const newOrder = new Order({
    orderId: Date.now(),
    productId: req.body.productId,
    quantity: req.body.quantity,
    address: req.body.address,
    paymentMethod: req.body.paymentMethod,
    status: "Pending",
  });

  newOrder.save()
    .then(() => res.status(201).send("Order placed successfully"))
    .catch((error) =>
      res.status(500).send("Error placing order: " + error)
    );
};

export const pickupOrderController = (req, res) => {
  Order.findOneAndUpdate(
    { orderId: req.params.orderId },
    { status: "Picked Up" },
    { new: true, runValidators: true }
  )
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.send("Order marked as picked up");
    })
    .catch((error) =>
      res.status(500).send("Error updating order: " + error)
    );
};

export const deliverOrderController = (req, res) => {
  Order.findOneAndUpdate(
    { orderId: req.params.orderId },
    { status: "Delivered", notes: req.body.notes },
    { new: true, runValidators: true }
  )
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.send("Order marked as delivered");
    })
    .catch((error) =>
      res.status(500).send("Error updating order: " + error)
    );
};

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderId: -1 });

    res.status(200).json(orders);

  } catch (error) {
    console.error("Error fetching orders:", error);

    res.status(500).json({
      message: "Error fetching orders",
      error: error.message
    });
  }
};