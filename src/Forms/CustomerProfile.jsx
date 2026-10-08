import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerProfile() {
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
        <h1 className="h3 mb-4">Customer Profile</h1>
        {saved && <div className="alert alert-success">Profile updated successfully.</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="profileName">Full Name</label>
            <input className="form-control" id="profileName" name="name" type="text" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="profileEmail">Email Address</label>
            <input className="form-control" id="profileEmail" name="email" type="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="profilePhone">Phone Number</label>
            <input className="form-control" id="profilePhone" name="phone" type="tel" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profileGender">Gender</label>
              <select className="form-select" id="profileGender" name="gender" defaultValue="" required>
                <option value="" disabled>Select gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profileBirthDate">Date of Birth</label>
              <input className="form-control" id="profileBirthDate" name="dateOfBirth" type="date" required />
            </div>
          </div>
          <button className="btn btn-pink" type="submit">Update Profile</button>
        </form>
      </div>
    </main>
  )
}

export default CustomerProfile
