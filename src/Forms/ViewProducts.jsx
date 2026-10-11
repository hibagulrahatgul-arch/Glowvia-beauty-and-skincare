import React from 'react';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum', price: 1299, quantity: 40 },
  { id: 2, name: 'Vitamin C Face Cream', price: 999, quantity: 25 },
  { id: 3, name: 'Gentle Face Wash', price: 799, quantity: 60 },
  { id: 4, name: 'Lip Care Balm', price: 499, quantity: 100 },
];

function ViewProducts() {
  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '650px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">View Products</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price (Rs.)</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewProducts;