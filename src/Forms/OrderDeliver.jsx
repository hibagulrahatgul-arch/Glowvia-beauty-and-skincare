import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dummyOrders = [
  { id: 101, customer: 'Ali Raza' },
  { id: 102, customer: 'Sara Khan' },
  { id: 103, customer: 'Bilal Ahmed' },
];

const orderDeliverSchema = z.object({
  orderId: z.string().min(1, 'Select an order'),
  notes: z.string(),
});

function OrderDeliver() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderDeliverSchema),
    defaultValues: { orderId: '', notes: '' },
  });

  const handleFormSubmit = (formData) => {
    console.log('Order Delivered:', formData);
    alert('Order Marked as Delivered!');
    reset();
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Order Deliver</h3>
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
          <div className="mb-3">
            <label className="form-label">Delivery Notes (optional)</label>
            <textarea className="form-control" rows="3" {...register('notes')}></textarea>
          </div>
          <button type="submit" className="btn btn-pink w-100">Confirm Delivery</button>
        </form>
      </div>
    </div>
  );
}

export default OrderDeliver;