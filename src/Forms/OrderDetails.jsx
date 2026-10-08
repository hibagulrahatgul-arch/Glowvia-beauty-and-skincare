import { Link, useParams } from 'react-router-dom'

const orders = [
  {
    id: 'GLW-1001',
    customerName: 'Ayesha Khan',
    productName: 'Hydrating Face Serum',
    quantity: 2,
    price: 1500,
    orderDate: '2026-10-08',
    paymentMethod: 'Cash on Delivery',
    status: 'Processing',
  },
  {
    id: 'GLW-1002',
    customerName: 'Sara Ahmed',
    productName: 'Lip Care Balm',
    quantity: 1,
    price: 500,
    orderDate: '2026-10-02',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
  },
]

function OrderDetails() {
  const { orderId } = useParams()
  const order = orders.find((savedOrder) => savedOrder.id === orderId)
    ?? (orderId === undefined ? orders[0] : undefined)

  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer/dashboard">
          &larr; Back to Customer Dashboard
        </Link>
        <h1 className="h3 mb-4">Order Details</h1>
        {!order ? (
          <p className="text-muted mt-3">Order not found.</p>
        ) : (
          <div className="border rounded p-4 bg-white">
            <div className="row g-3">
              <div className="col-md-6"><strong>Order ID:</strong> {order.id}</div>
              <div className="col-md-6"><strong>Customer Name:</strong> {order.customerName}</div>
              <div className="col-md-6"><strong>Product Name:</strong> {order.productName}</div>
              <div className="col-md-6"><strong>Quantity:</strong> {order.quantity}</div>
              <div className="col-md-6"><strong>Price:</strong> PKR {order.price.toLocaleString()}</div>
              <div className="col-md-6"><strong>Order Date:</strong> {order.orderDate}</div>
              <div className="col-md-6"><strong>Payment Method:</strong> {order.paymentMethod}</div>
              <div className="col-md-6"><strong>Order Status:</strong> {order.status}</div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default OrderDetails
