import AdminLogin from './AdminLogin'
import SignUp from './SignUp'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import CategoryForm from './CategoryForm'
import OrderStatus from './OrderStatus'
import CustomerManagement from './CustomerManagement'
import CouponForm from './CouponForm'
import AdminProfile from './AdminProfile'

// Jo form dekhna hai sirf usay uncomment rakho, baqi sab ke aage comment laga do.
function AdminForms() {
  return (
    <div className="container py-5" style={{ maxWidth: '700px' }}>
       {/* <AdminLogin />  */}
       {/* <SignUp />  */}
       {/* <AddProduct />  */}
       {/* <EditProduct />  */}
      {/* <CategoryForm /> */}
      {/* <OrderStatus />  */}
      {/* <CustomerManagement />  */}
      {/* <CouponForm /> */}
       <AdminProfile /> 
    </div>
  )
}

export default AdminForms