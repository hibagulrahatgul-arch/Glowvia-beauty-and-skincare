function AdminLogin() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Admin Login</h3>

      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="loginEmail" name="email" required />
      </div>

      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="loginPassword" name="password" required />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" name="remember" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit" className="btn btn-pink">Login</button>
    </form>
  )
}

export default AdminLogin