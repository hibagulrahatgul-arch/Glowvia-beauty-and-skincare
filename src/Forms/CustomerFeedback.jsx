import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerFeedback() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer/dashboard">
          &larr; Back to Customer Dashboard
        </Link>
        <h1 className="h3 mb-4">Customer Feedback</h1>
        {submitted && <div className="alert alert-success">Thank you for your feedback.</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackName">Customer Name</label>
            <input className="form-control" id="feedbackName" name="name" type="text" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackEmail">Email Address</label>
            <input className="form-control" id="feedbackEmail" name="email" type="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackProduct">Product Name</label>
            <input className="form-control" id="feedbackProduct" name="productName" type="text" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackRating">Rating</label>
            <select className="form-select" id="feedbackRating" name="rating" defaultValue="" required>
              <option value="" disabled>Select a rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="feedbackMessage">Feedback Message</label>
            <textarea className="form-control" id="feedbackMessage" name="message" rows="4" required />
          </div>
          <button className="btn btn-pink" type="submit">Submit Feedback</button>
        </form>
      </div>
    </main>
  )
}

export default CustomerFeedback
