import { useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Hydrating Face Serum', price: 1500 },
  { name: 'Vitamin C Face Cream', price: 1800 },
  { name: 'Gentle Face Wash', price: 1200 },
  { name: 'Lip Care Balm', price: 500 },
]

function OrderCheckout() {
  const [productName, setProductName] = useState(products[0].name)
  const [quantity, setQuantity] = useState(1)
  const [placed, setPlaced] = useState(false)

  const selectedProduct = products.find((product) => product.name === productName)
  const totalAmount = selectedProduct.price * Number(quantity)

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlaced(true)
  }

  return (
    <main className="container py-5">
      <div className="mx-auto admin-form-content">
        <Link className="text-pink text-decoration-none" to="/customer/dashboard">
          &larr; Back to Customer Dashboard
        </Link>
        <h1 className="h3 mb-4">Order / Checkout</h1>
        {placed && <div className="alert alert-success">Your order has been placed successfully.</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="checkoutCustomerName">Customer Name</label>
            <input className="form-control" id="checkoutCustomerName" name="customerName" type="text" autoComplete="name" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="checkoutEmail">Email Address</label>
              <input className="form-control" id="checkoutEmail" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="checkoutPhone">Phone Number</label>
              <input className="form-control" id="checkoutPhone" name="phone" type="tel" autoComplete="tel" required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="shippingAddress">Shipping Address</label>
            <textarea className="form-control" id="shippingAddress" name="shippingAddress" rows="3" autoComplete="street-address" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="checkoutCity">City</label>
              <input className="form-control" id="checkoutCity" name="city" type="text" autoComplete="address-level2" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="checkoutPostalCode">Postal Code</label>
              <input className="form-control" id="checkoutPostalCode" name="postalCode" type="text" autoComplete="postal-code" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mb-3">
              <label className="form-label" htmlFor="checkoutProduct">Product Name</label>
              <select
                className="form-select"
                id="checkoutProduct"
                name="productName"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required
              >
                {products.map((product) => (
                  <option key={product.name} value={product.name}>{product.name}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" htmlFor="checkoutQuantity">Quantity</label>
              <input
                className="form-control"
                id="checkoutQuantity"
                name="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="checkoutPayment">Payment Method</label>
            <select className="form-select" id="checkoutPayment" name="paymentMethod" defaultValue="Cash on Delivery" required>
              <option>Cash on Delivery</option>
            </select>
          </div>

          <section className="border rounded p-3 mb-4" aria-labelledby="orderSummaryTitle">
            <h2 className="h5 mb-3" id="orderSummaryTitle">Order Summary</h2>
            <div className="d-flex justify-content-between mb-2">
              <span>Product Price</span>
              <span>PKR {selectedProduct.price.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold border-top pt-2">
              <span>Total Amount</span>
              <span>PKR {totalAmount.toLocaleString()}</span>
            </div>
          </section>
          <button className="btn btn-pink" type="submit">Place Order</button>
        </form>
      </div>
    </main>
  )
}

export default OrderCheckout
