function AdminProfile() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (data.newPassword !== data.confirmPassword) {
      alert('New password aur confirm password match nahi kar rahe')
      return
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Admin Profile / Change Password</h3>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" />
      </div>

      <div className="mb-3">
        <label className="form-label">Current Password</label>
        <input type="password" className="form-control" name="currentPassword" required />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" name="newPassword" required />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="confirmPassword" required />
        </div>
      </div>

      <button type="submit" className="btn btn-pink">Save Changes</button>
    </form>
  )
}

export default AdminProfile