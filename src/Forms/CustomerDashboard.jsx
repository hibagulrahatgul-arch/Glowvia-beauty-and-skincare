import { Link } from 'react-router-dom'

const customerPages = [
  { label: 'My Profile', path: '/customer/profile' },
  { label: 'My Address', path: '/customer/address' },
  { label: 'My Orders', path: '/orders' },
  { label: 'Order Checkout', path: '/checkout' },
  { label: 'Order Status', path: '/orders/status' },
  { label: 'Customer Feedback', path: '/customer/feedback' },
]

function CustomerDashboard() {
  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer">
          &larr; Customer Login / Sign Up
        </Link>
        <h1 className="h3 mt-3 mb-2">Customer Dashboard</h1>
        <p className="text-muted mb-4">Choose an option to manage your account and orders.</p>
        <div className="row g-3">
          {customerPages.map(({ label, path }) => (
            <div className="col-sm-6" key={path}>
              <Link className="btn btn-outline-secondary w-100 text-start p-3" to={path}>
                {label}
                <span className="float-end" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default CustomerDashboard
