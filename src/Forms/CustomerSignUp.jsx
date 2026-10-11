import React, { useState } from 'react';

function CustomerSignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    console.log('Customer Sign Up:', formData);
    alert('Sign Up Successful!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '480px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Customer Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-pink w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSignUp;