function AddProduct() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Add Product</h3>

      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" name="name" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" rows="3"></textarea>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Price (Rs)</label>
          <input type="number" className="form-control" name="price" required />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Discount (%)</label>
          <input type="number" className="form-control" name="discount" defaultValue="0" />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" name="stock" required />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select" name="category" required>
          <option value="">Select category</option>
          <option>Skincare</option>
          <option>Makeup</option>
          <option>Body Care</option>
          <option>Beauty Essentials</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input type="file" className="form-control" name="image" accept="image/*" />
      </div>

      <button type="submit" className="btn btn-pink">Add Product</button>
    </form>
  )
}

export default AddProduct