import React, { useState } from 'react';

const dummyOrders = [
  { id: 101, customer: 'Ali Raza' },
  { id: 102, customer: 'Sara Khan' },
  { id: 103, customer: 'Bilal Ahmed' },
];

function OrderPickup() {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) return;
    console.log('Order Picked Up:', orderId);
    alert('Order Marked as Picked Up!');
    setOrderId('');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Order Pickup</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Order</label>
            <select className="form-select" value={orderId} onChange={(e) => setOrderId(e.target.value)} required>
              <option value="">-- Choose Order --</option>
              {dummyOrders.map((o) => (
                <option key={o.id} value={o.id}>Order #{o.id} — {o.customer}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-pink w-100">Confirm Pickup</button>
        </form>
      </div>
    </div>
  );
}

export default OrderPickup;