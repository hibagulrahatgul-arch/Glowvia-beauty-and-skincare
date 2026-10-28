import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  getAllOrdersAxiosFunction,
  pickupOrderAxiosFunction
} from '../service/api';

const orderPickupSchema = z.object({
  orderId: z.string().min(1, 'Select an order'),
});

function OrderPickup() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderPickupSchema),
    defaultValues: { orderId: '' },
  });

  // Fetch real orders from MongoDB
  useEffect(() => {

    const fetchOrders = async () => {
      try {
        const data = await getAllOrdersAxiosFunction();

        console.log("Orders from MongoDB:", data);

        setOrders(data.filter(
          (order) => order.status === "Pending"
        ));

      } catch (error) {
        console.error(
          "Error fetching orders:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();

  }, []);

  // Pickup order
  const handleFormSubmit = async ({ orderId }) => {

    try {
      const response = await pickupOrderAxiosFunction(orderId);

      console.log("Order Picked Up:", response);

      alert("Order Marked as Picked Up!");

      setOrders((prev) =>
        prev.filter((order) => String(order.orderId) !== orderId)
      );

      reset();

    } catch (error) {
      console.error(
        "Pickup Error:",
        error.response?.data || error.message
      );

      alert("Failed to pickup order!");
    }
  };

  return (
    <div
      className="card shadow-sm mx-auto"
      style={{ maxWidth: '450px' }}
    >
      <div className="card-body p-4">

        <h3 className="card-title text-center mb-4">
          Order Pickup
        </h3>

        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <div className="mb-3">
              <label className="form-label">
                Select Order
              </label>

              <select
                className="form-select"
                {...register('orderId')}
              >
                <option value="">
                  -- Choose Order --
                </option>

                {orders.map((order) => (
                  <option
                    key={order.orderId}
                    value={order.orderId}
                  >
                    Order #{order.orderId}
                  </option>
                ))}
              </select>

              {errors.orderId && (
                <span className="text-danger">
                  {errors.orderId.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-pink w-100"
            >
              Confirm Pickup
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default OrderPickup;