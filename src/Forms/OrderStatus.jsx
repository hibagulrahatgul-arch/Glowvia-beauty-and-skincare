function OrderStatus() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Update Order Status</h3>

      <div className="mb-3">
        <label className="form-label">Order ID</label>
        <input type="text" className="form-control" name="orderId" placeholder="e.g. GLW-1001" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select className="form-select" name="status" required>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Note (optional)</label>
        <textarea className="form-control" name="note" rows="2"></textarea>
      </div>

      <button type="submit" className="btn btn-pink">Update Status</button>
    </form>
  )
}

export default OrderStatus