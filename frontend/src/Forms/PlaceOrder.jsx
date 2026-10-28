import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { placeOrderAxiosFunction } from '../service/api';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum', price: 1299 },
  { id: 2, name: 'Vitamin C Face Cream', price: 999 },
  { id: 3, name: 'Gentle Face Wash', price: 799 },
  { id: 4, name: 'Lip Care Balm', price: 499 },
];

const placeOrderSchema = z.object({
  productId: z.string().min(1, 'Select a product'),
  quantity: z.string().min(1, 'Quantity is required').refine((value) => Number.isInteger(Number(value)) && Number(value) > 0, 'Quantity must be a positive whole number'),
  address: z.string().trim().min(1, 'Delivery address is required'),
  paymentMethod: z.string().min(1, 'Select a payment method'),
});

function PlaceOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(placeOrderSchema),
    defaultValues: { productId: '', quantity: '1', address: '', paymentMethod: 'Cash on Delivery' },
  });

  const handleFormSubmit = async (formData) => {
    console.log('Order Placed:', formData);
    await placeOrderAxiosFunction(formData);
    alert('Order Placed Successfully!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Place Order / Checkout</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <select className="form-select" {...register('productId')}>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name} — Rs. {p.price}</option>
              ))}
            </select>
            {errors.productId && <span className="text-danger">{errors.productId.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="number" className="form-control" min="1" {...register('quantity')} />
            {errors.quantity && <span className="text-danger">{errors.quantity.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Delivery Address</label>
            <textarea className="form-control" rows="3" {...register('address')}></textarea>
            {errors.address && <span className="text-danger">{errors.address.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select className="form-select" {...register('paymentMethod')}>
              <option>Cash on Delivery</option>
              <option>Credit / Debit Card</option>
              <option>Easypaisa / JazzCash</option>
            </select>
          </div>
          <button type="submit" className="btn btn-pink w-100">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;