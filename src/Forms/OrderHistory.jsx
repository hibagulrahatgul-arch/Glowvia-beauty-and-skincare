import { Link } from 'react-router-dom'

const orders = [
  {
    id: 'GLW-1001',
    productName: 'Hydrating Face Serum',
    quantity: 2,
    totalPrice: 3000,
    orderDate: '2026-10-08',
    status: 'Processing',
  },
  {
    id: 'GLW-1002',
    productName: 'Lip Care Balm',
    quantity: 1,
    totalPrice: 500,
    orderDate: '2026-10-02',
    status: 'Delivered',
  },
]

function OrderHistory() {
  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <Link className="text-pink text-decoration-none" to="/customer/dashboard">
            &larr; Back to Customer Dashboard
          </Link>
          <h1 className="h3 mt-3 mb-0">Order History</h1>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price (PKR)</th>
              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice.toLocaleString()}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <Link className="btn btn-pink btn-sm" to={`/orders/${order.id}`}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default OrderHistory
