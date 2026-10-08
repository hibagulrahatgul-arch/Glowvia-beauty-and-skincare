import { Link } from 'react-router-dom'
import OrderStatus from './OrderStatus.jsx'

function CustomerOrderStatus() {
  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer/dashboard">
          &larr; Back to Customer Dashboard
        </Link>
        <div className="mt-4">
          <OrderStatus />
        </div>
      </div>
    </main>
  )
}

export default CustomerOrderStatus
