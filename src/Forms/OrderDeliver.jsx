import React, { useState } from 'react';

const dummyOrders = [
  { id: 101, customer: 'Ali Raza' },
  { id: 102, customer: 'Sara Khan' },
  { id: 103, customer: 'Bilal Ahmed' },
];

function OrderDeliver() {
  const [formData, setFormData] = useState({ orderId: '', notes: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.orderId) return;
    console.log('Order Delivered:', formData);
    alert('Order Marked as Delivered!');
    setFormData({ orderId: '', notes: '' });
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Order Deliver</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Order</label>
            <select name="orderId" className="form-select" value={formData.orderId} onChange={handleChange} required>
              <option value="">-- Choose Order --</option>
              {dummyOrders.map((o) => (
                <option key={o.id} value={o.id}>Order #{o.id} — {o.customer}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Delivery Notes (optional)</label>
            <textarea name="notes" className="form-control" rows="3" value={formData.notes} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-pink w-100">Confirm Delivery</button>
        </form>
      </div>
    </div>
  );
}

export default OrderDeliver;