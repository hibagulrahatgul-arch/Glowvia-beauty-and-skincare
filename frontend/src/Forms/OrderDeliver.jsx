import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  getAllOrdersAxiosFunction,
  deliverOrderAxiosFunction
} from '../service/api';

const orderDeliverSchema = z.object({
  orderId: z.string().min(1, 'Select an order'),
  notes: z.string(),
});

function OrderDeliver() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderDeliverSchema),
    defaultValues: {
      orderId: '',
      notes: ''
    },
  });

  // Fetch orders from MongoDB
  useEffect(() => {

    const fetchOrders = async () => {
      try {
        const data = await getAllOrdersAxiosFunction();

        console.log("Orders from MongoDB:", data);

        setOrders(data.filter(
          (order) => order.status === "Picked Up"
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

  // Deliver order
  const handleFormSubmit = async (formData) => {

    try {
      const response = await deliverOrderAxiosFunction(
        formData.orderId,
        { notes: formData.notes }
      );

      console.log("Order Delivered:", response);

      alert("Order Marked as Delivered!");

      setOrders((prev) =>
        prev.filter(
          (order) => String(order.orderId) !== formData.orderId
        )
      );

      reset();

    } catch (error) {
      console.error(
        "Delivery Error:",
        error.response?.data || error.message
      );

      alert("Failed to deliver order!");
    }
  };

  return (
    <div
      className="card shadow-sm mx-auto"
      style={{ maxWidth: '450px' }}
    >
      <div className="card-body p-4">

        <h3 className="card-title text-center mb-4">
          Order Deliver
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

            <div className="mb-3">
              <label className="form-label">
                Delivery Notes (optional)
              </label>

              <textarea
                className="form-control"
                rows="3"
                {...register('notes')}
              />
            </div>

            <button
              type="submit"
              className="btn btn-pink w-100"
            >
              Confirm Delivery
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default OrderDeliver;