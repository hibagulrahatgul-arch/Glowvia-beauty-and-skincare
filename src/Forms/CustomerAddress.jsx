import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerAddress() {
  const [saved, setSaved] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer/dashboard">
          &larr; Back to Customer Dashboard
        </Link>
        <h1 className="h3 mb-4">Customer Address</h1>
        {saved && <div className="alert alert-success">Address saved successfully.</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="addressName">Full Name</label>
            <input className="form-control" id="addressName" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="addressPhone">Phone Number</label>
            <input className="form-control" id="addressPhone" name="phone" type="tel" autoComplete="tel" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="streetAddress">House/Street Address</label>
            <textarea className="form-control" id="streetAddress" name="address" rows="3" autoComplete="street-address" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="addressCity">City</label>
              <input className="form-control" id="addressCity" name="city" type="text" autoComplete="address-level2" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="addressProvince">Province</label>
              <input className="form-control" id="addressProvince" name="province" type="text" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="addressPostalCode">Postal Code</label>
              <input className="form-control" id="addressPostalCode" name="postalCode" type="text" autoComplete="postal-code" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="addressCountry">Country</label>
              <input className="form-control" id="addressCountry" name="country" type="text" autoComplete="country-name" required />
            </div>
          </div>
          <button className="btn btn-pink" type="submit">Save Address</button>
        </form>
      </div>
    </main>
  )
}

export default CustomerAddress
