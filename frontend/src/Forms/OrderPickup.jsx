import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dummyOrders = [
  { id: 101, customer: 'Ali Raza' },
  { id: 102, customer: 'Sara Khan' },
  { id: 103, customer: 'Bilal Ahmed' },
];

const orderPickupSchema = z.object({
  orderId: z.string().min(1, 'Select an order'),
});

function OrderPickup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(orderPickupSchema), defaultValues: { orderId: '' } });

  const handleFormSubmit = ({ orderId }) => {
    console.log('Order Picked Up:', orderId);
    alert('Order Marked as Picked Up!');
    reset();
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Order Pickup</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Select Order</label>
            <select className="form-select" {...register('orderId')}>
              <option value="">-- Choose Order --</option>
              {dummyOrders.map((o) => (
                <option key={o.id} value={o.id}>Order #{o.id} — {o.customer}</option>
              ))}
            </select>
            {errors.orderId && <span className="text-danger">{errors.orderId.message}</span>}
          </div>
          <button type="submit" className="btn btn-pink w-100">Confirm Pickup</button>
        </form>
      </div>
    </div>
  );
}

export default OrderPickup;