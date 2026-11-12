import Order from "../models/orders.js";

// Request ke data se naya order bana kar database mein save karta hai.
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

// Order ka status Picked Up mein tabdeel karta hai.
export const pickupOrderController = (req, res) => {
  Order.findOneAndUpdate(
    { orderId: req.params.orderId },
    { status: "Picked Up" },
    { new: true, runValidators: true }
  )
    .then((order) => {
      // Order na milne par 404 response bheja jata hai.
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.send("Order marked as picked up");
    })
    .catch((error) =>
      res.status(500).send("Error updating order: " + error)
    );
};

// Order ka status Delivered karta hai aur di hui notes save karta hai.
export const deliverOrderController = (req, res) => {
  Order.findOneAndUpdate(
    { orderId: req.params.orderId },
    { status: "Delivered", notes: req.body.notes },
    { new: true, runValidators: true }
  )
    .then((order) => {
      // Order na milne par 404 response bheja jata hai.
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.send("Order marked as delivered");
    })
    .catch((error) =>
      res.status(500).send("Error updating order: " + error)
    );
};

// Tamam orders ko naye order se purane order ki tarteeb mein bhejta hai.
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