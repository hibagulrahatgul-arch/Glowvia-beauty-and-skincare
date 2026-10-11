import React, { useState } from 'react';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum' },
  { id: 2, name: 'Vitamin C Face Cream' },
  { id: 3, name: 'Gentle Face Wash' },
  { id: 4, name: 'Lip Care Balm' },
];

function DeleteProduct() {
  const [productId, setProductId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productId) return;
    const confirmDelete = window.confirm('Are you sure you want to discontinue this product?');
    if (confirmDelete) {
      console.log('Discontinued Product ID:', productId);
      alert('Product Discontinued!');
      setProductId('');
    }
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Delete Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Product to Discontinue</label>
            <select className="form-select" value={productId} onChange={(e) => setProductId(e.target.value)} required>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-pink w-100">Discontinue Product</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;