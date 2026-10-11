import React, { useState } from 'react';

const initialComplaints = [
  { id: 1, customer: 'Ali Raza', message: 'Late delivery', status: 'Pending' },
  { id: 2, customer: 'Sara Khan', message: 'Damaged product', status: 'Pending' },
];

function ManageComplaints() {
  const [complaints, setComplaints] = useState(initialComplaints);

  const handleStatusChange = (id, newStatus) => {
    setComplaints(complaints.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
  };

  const handleDelete = (id) => {
    setComplaints(complaints.filter((c) => c.id !== id));
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '700px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Manage Complaints</h3>
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>{c.customer}</td>
                <td>{c.message}</td>
                <td>
                  <select className="form-select form-select-sm" value={c.status} onChange={(e) => handleStatusChange(c.id, e.target.value)}>
                    <option>Pending</option>
                    <option>In Process</option>
                    <option>Resolved</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-sm btn-pink" onClick={() => handleDelete(c.id)}>Resolve / Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageComplaints;