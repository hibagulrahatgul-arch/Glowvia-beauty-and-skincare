import React, { useState } from 'react';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum' },
  { id: 2, name: 'Vitamin C Face Cream' },
  { id: 3, name: 'Gentle Face Wash' },
  { id: 4, name: 'Lip Care Balm' },
];

function UpdateProduct() {
  const [formData, setFormData] = useState({ productId: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    alert('Product Updated!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Update Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <select name="productId" className="form-select" value={formData.productId} onChange={handleChange} required>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">New Price (Rs.)</label>
              <input type="number" name="price" className="form-control" value={formData.price} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">New Quantity</label>
              <input type="number" name="quantity" className="form-control" value={formData.quantity} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-pink w-100">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;