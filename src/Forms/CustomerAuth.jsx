import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerAuth() {
  const [activeForm, setActiveForm] = useState('login')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    if (activeForm === 'signup' && data.password !== data.confirmPassword) {
      alert('Password and confirm password do not match.')
      return
    }
    console.log(data)
  }

  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/">
          &larr; Back to storefront
        </Link>
        <Link className="text-pink text-decoration-none ms-3" to="/customer/dashboard">
          Customer Dashboard
        </Link>
        <h1 className="mt-3">Customer Account</h1>
        <p className="text-muted">Sign in or create an account to get started.</p>

        <div className="nav nav-tabs mb-4" role="tablist" aria-label="Customer account forms">
          <button
            className={`nav-link${activeForm === 'login' ? ' active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeForm === 'login'}
            onClick={() => setActiveForm('login')}
          >
            Customer Login
          </button>
          <button
            className={`nav-link${activeForm === 'signup' ? ' active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeForm === 'signup'}
            onClick={() => setActiveForm('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeForm === 'login' ? (
          <form onSubmit={handleSubmit}>
            <h2 className="h4 mb-4">Customer Login</h2>
            <div className="mb-3">
              <label className="form-label" htmlFor="customerLoginEmail">Email address</label>
              <input className="form-control" id="customerLoginEmail" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="customerLoginPassword">Password</label>
              <input className="form-control" id="customerLoginPassword" name="password" type="password" autoComplete="current-password" required />
            </div>
            <button className="btn btn-pink" type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="h4 mb-4">Create Customer Account</h2>
            <div className="mb-3">
              <label className="form-label" htmlFor="customerSignupName">Full Name</label>
              <input className="form-control" id="customerSignupName" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="customerSignupEmail">Email address</label>
              <input className="form-control" id="customerSignupEmail" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="customerSignupPhone">Phone</label>
              <input className="form-control" id="customerSignupPhone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="customerSignupPassword">Password</label>
                <input className="form-control" id="customerSignupPassword" name="password" type="password" autoComplete="new-password" required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="customerSignupConfirm">Confirm Password</label>
                <input className="form-control" id="customerSignupConfirm" name="confirmPassword" type="password" autoComplete="new-password" required />
              </div>
            </div>
            <button className="btn btn-pink" type="submit">Create Account</button>
          </form>
        )}
      </div>
    </main>
  )
}

export default CustomerAuth
