import React, { useState } from 'react';

function ManageMembership() {
  const [tab, setTab] = useState('add');
  const [addData, setAddData] = useState({ name: '', email: '', type: 'Regular' });
  const [updateData, setUpdateData] = useState({ memberId: '', name: '', email: '' });

  const handleAddChange = (e) => setAddData({ ...addData, [e.target.name]: e.target.value });
  const handleUpdateChange = (e) => setUpdateData({ ...updateData, [e.target.name]: e.target.value });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log('New Member:', addData);
    alert('Member Added!');
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Member:', updateData);
    alert('Member Data Updated!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Manage Membership</h3>
        <ul className="nav nav-pills nav-fill mb-4">
          <li className="nav-item">
            <button className={`nav-link ${tab === 'add' ? 'active' : ''}`} onClick={() => setTab('add')}>Add Member</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${tab === 'update' ? 'active' : ''}`} onClick={() => setTab('update')}>Update Data</button>
          </li>
        </ul>

        {tab === 'add' && (
          <form onSubmit={handleAddSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={addData.name} onChange={handleAddChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={addData.email} onChange={handleAddChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Membership Type</label>
              <select name="type" className="form-select" value={addData.type} onChange={handleAddChange}>
                <option>Regular</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
            </div>
            <button type="submit" className="btn btn-pink w-100">Add Member</button>
          </form>
        )}

        {tab === 'update' && (
          <form onSubmit={handleUpdateSubmit}>
            <div className="mb-3">
              <label className="form-label">Member ID</label>
              <input type="text" name="memberId" className="form-control" value={updateData.memberId} onChange={handleUpdateChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">New Name</label>
              <input type="text" name="name" className="form-control" value={updateData.name} onChange={handleUpdateChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">New Email</label>
              <input type="email" name="email" className="form-control" value={updateData.email} onChange={handleUpdateChange} />
            </div>
            <button type="submit" className="btn btn-pink w-100">Update Member</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ManageMembership;