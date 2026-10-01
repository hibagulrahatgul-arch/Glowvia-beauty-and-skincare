function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (data.password !== data.confirmPassword) {
      alert('Password aur confirm password match nahi kar rahe')
      return
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4">Sign Up</h3>

      <div className="mb-3">
        <label htmlFor="signupName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="signupName" name="name" required />
      </div>

      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="signupEmail" name="email" required />
      </div>

      <div className="mb-3">
        <label htmlFor="signupPhone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="signupPhone" name="phone" placeholder="+92 300 0000000" />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signupPassword" name="password" required />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="signupConfirm" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="signupConfirm" name="confirmPassword" required />
        </div>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="signupTerms" name="terms" required />
        <label className="form-check-label" htmlFor="signupTerms">I agree to the terms and conditions</label>
      </div>

      <button type="submit" className="btn btn-pink">Create Account</button>
    </form>
  )
}

export default SignUp