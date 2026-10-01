function CouponForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Add Coupon</h3>

      <div className="mb-3">
        <label className="form-label">Coupon Code</label>
        <input type="text" className="form-control" name="code" placeholder="e.g. GLOW10" required />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Discount (%)</label>
          <input type="number" className="form-control" name="percentage" min="1" max="100" required />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Expiry Date</label>
          <input type="date" className="form-control" name="expiry" required />
        </div>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="couponActive" name="active" defaultChecked />
        <label className="form-check-label" htmlFor="couponActive">Active</label>
      </div>

      <button type="submit" className="btn btn-pink">Save Coupon</button>
    </form>
  )
}

export default CouponForm