import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from './Home.jsx';
import AdminForms, { AdminWelcome } from './Forms/AdminForms.jsx';
import AllForms from './Forms/AllForms.jsx';
import AddProduct from './Forms/AddProduct.jsx';
import AdminLogin from './Forms/AdminLogin.jsx';
import CustomerLogin from './Forms/CustomerLogin.jsx';
import CustomerSignUp from './Forms/CustomerSignUp.jsx';
import DeleteProduct from './Forms/DeleteProduct.jsx';
import ManageComplaints from './Forms/ManageComplaints.jsx';
import ManageMembership from './Forms/ManageMembership.jsx';
import OrderDeliver from './Forms/OrderDeliver.jsx';
import OrderPickup from './Forms/OrderPickup.jsx';
import PlaceOrder from './Forms/PlaceOrder.jsx';
import SubmitComplaint from './Forms/SubmitComplaint.jsx';
import UpdateProduct from './Forms/UpdateProduct.jsx';
import ViewProducts from './Forms/ViewProducts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <AdminForms />,
    children: [
      { index: true, element: <AdminWelcome /> },
      { path: 'admin-login', element: <AdminLogin /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: 'update-product', element: <UpdateProduct /> },
      { path: 'delete-product', element: <DeleteProduct /> },
      { path: 'view-products', element: <ViewProducts /> },
      { path: 'manage-complaints', element: <ManageComplaints /> },
      { path: 'manage-membership', element: <ManageMembership /> },
    ],
  },
  {
    path: '/customer',
    element: <AllForms group="Customer" />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'login', element: <CustomerLogin /> },
      { path: 'sign-up', element: <CustomerSignUp /> },
      { path: 'place-order', element: <PlaceOrder /> },
      { path: 'submit-complaint', element: <SubmitComplaint /> },
    ],
  },
  {
    path: '/rider',
    element: <AllForms group="Rider" />,
    children: [
      { index: true, element: <Navigate to="order-pickup" replace /> },
      { path: 'order-pickup', element: <OrderPickup /> },
      { path: 'order-deliver', element: <OrderDeliver /> },
    ],
  },
]);

export default router;
