import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({ name: '', category: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', formData);
    alert('Product Added!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Add Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Price (Rs.)</label>
              <input type="number" name="price" className="form-control" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input type="number" name="quantity" className="form-control" value={formData.quantity} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="btn btn-pink w-100">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;