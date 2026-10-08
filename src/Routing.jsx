
import { createBrowserRouter } from 'react-router-dom';

import App from './Home.jsx'
import EditProduct from './Forms/EditProduct.jsx'
import AdminForms, { AdminWelcome } from './Forms/AdminForms.jsx'
import AddProduct from './Forms/AddProduct.jsx'
import CategoryForm from './Forms/CategoryForm.jsx'
import OrderStatus from './Forms/OrderStatus.jsx'
import CustomerManagement from './Forms/CustomerManagement.jsx'
import CouponForm from './Forms/CouponForm.jsx'
import AdminProfile from './Forms/AdminProfile.jsx'
import AdminLogin from './Forms/AdminLogin.jsx'
import SignUp from './Forms/SignUp.jsx'
import CustomerAuth from './Forms/CustomerAuth.jsx'
import CustomerProfile from './Forms/CustomerProfile.jsx'
import CustomerAddress from './Forms/CustomerAddress.jsx'
import CustomerFeedback from './Forms/CustomerFeedback.jsx'
import OrderCheckout from './Forms/OrderCheckout.jsx'
import OrderDetails from './Forms/OrderDetails.jsx'
import OrderHistory from './Forms/OrderHistory.jsx'
import CustomerDashboard from './Forms/CustomerDashboard.jsx'
import CustomerOrderStatus from './Forms/CustomerOrderStatus.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/customer",
    element: <CustomerAuth />,
  },
  {
    path: "/customer/dashboard",
    element: <CustomerDashboard />,
  },
  {
    path: "/customer/profile",
    element: <CustomerProfile />,
  },
  {
    path: "/customer/address",
    element: <CustomerAddress />,
  },
  {
    path: "/customer/feedback",
    element: <CustomerFeedback />,
  },
  {
    path: "/checkout",
    element: <OrderCheckout />,
  },
  {
    path: "/orders",
    element: <OrderHistory />,
  },
  {
    path: "/orders/:orderId",
    element: <OrderDetails />,
  },
  {
    path: "/orders/details",
    element: <OrderDetails />,
  },
  {
    path: "/orders/status",
    element: <CustomerOrderStatus />,
  },
  {
    path: "/orders/history",
    element: <OrderHistory />,
  },
  {
    path: "/admin",
    element: <AdminForms />,
    children: [
      { index: true, element: <AdminWelcome /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "edit-product", element: <EditProduct /> },
      { path: "category-form", element: <CategoryForm /> },
      { path: "order-status", element: <OrderStatus /> },
      { path: "customer-management", element: <CustomerManagement /> },
      { path: "coupon-form", element: <CouponForm /> },
      { path: "admin-profile", element: <AdminProfile /> },
      { path: "admin-login", element: <AdminLogin /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]
);
export default router;