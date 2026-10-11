import React, { useState } from 'react';

function SubmitComplaint() {
  const [formData, setFormData] = useState({ orderId: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
    alert('Complaint Submitted!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '480px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Submit Complaint</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Order ID</label>
            <input type="text" name="orderId" className="form-control" value={formData.orderId} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input type="text" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-pink w-100">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint;