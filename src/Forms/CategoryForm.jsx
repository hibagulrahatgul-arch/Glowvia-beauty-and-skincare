function CategoryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Add / Edit Category</h3>

      <div className="mb-3">
        <label className="form-label">Category Name</label>
        <input type="text" className="form-control" name="name" placeholder="e.g. Skincare" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" rows="3"></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Category Image</label>
        <input type="file" className="form-control" name="image" accept="image/*" />
      </div>

      <button type="submit" className="btn btn-pink">Save Category</button>
    </form>
  )
}

export default CategoryForm