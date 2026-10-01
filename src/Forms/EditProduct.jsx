import { useState } from 'react'

function EditProduct() {
  // Abhi dummy data hai. Baad mein backend se aayega.
  const [product, setProduct] = useState({
    name: 'Hydrating Face Serum',
    description: 'Lightweight serum that keeps the skin hydrated all day.',
    price: 1500,
    discount: 10,
    stock: 25,
    category: 'Skincare',
  })

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Edit Product</h3>

      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" rows="3" value={product.description} onChange={handleChange}></textarea>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Price (Rs)</label>
          <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Discount (%)</label>
          <input type="number" className="form-control" name="discount" value={product.discount} onChange={handleChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" name="stock" value={product.stock} onChange={handleChange} />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select" name="category" value={product.category} onChange={handleChange}>
          <option>Skincare</option>
          <option>Makeup</option>
          <option>Body Care</option>
          <option>Beauty Essentials</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Change Image (optional)</label>
        <input type="file" className="form-control" name="image" accept="image/*" />
      </div>

      <button type="submit" className="btn btn-pink">Update Product</button>
    </form>
  )
}

export default EditProduct