import React, { useState } from 'react';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum', price: 1299 },
  { id: 2, name: 'Vitamin C Face Cream', price: 999 },
  { id: 3, name: 'Gentle Face Wash', price: 799 },
  { id: 4, name: 'Lip Care Balm', price: 499 },
];

function PlaceOrder() {
  const [formData, setFormData] = useState({ productId: '', quantity: 1, address: '', paymentMethod: 'Cash on Delivery' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Placed:', formData);
    alert('Order Placed Successfully!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Place Order / Checkout</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <select name="productId" className="form-select" value={formData.productId} onChange={handleChange} required>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name} — Rs. {p.price}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="number" name="quantity" className="form-control" min="1" value={formData.quantity} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Delivery Address</label>
            <textarea name="address" className="form-control" rows="3" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select name="paymentMethod" className="form-select" value={formData.paymentMethod} onChange={handleChange}>
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