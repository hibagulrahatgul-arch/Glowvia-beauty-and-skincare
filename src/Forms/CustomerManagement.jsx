function CustomerManagement() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Customer Management</h3>

      <div className="mb-3">
        <label className="form-label">Customer Email</label>
        <input type="email" className="form-control" name="email" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Action</label>
        <select className="form-select" name="action">
          <option value="active">Active</option>
          <option value="blocked">Block</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Reason (optional)</label>
        <textarea className="form-control" name="reason" rows="2"></textarea>
      </div>

      <button type="submit" className="btn btn-pink">Update Customer</button>
    </form>
  )
}

export default CustomerManagement