import { Link, NavLink, Outlet } from 'react-router-dom'

function AdminForms() {
  const adminPages = [
    { label: 'Admin Login', path: 'admin-login' },
    { label: 'Sign Up', path: 'sign-up' },
    { label: 'Add Product', path: 'add-product' },
    { label: 'Edit Product', path: 'edit-product' },
    { label: 'Categories', path: 'category-form' },
    { label: 'Orders', path: 'order-status' },
    { label: 'Customers', path: 'customer-management' },
    { label: 'Coupons', path: 'coupon-form' },
    { label: 'Admin Profile', path: 'admin-profile' },
  ]

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold text-pink mb-0" to="/admin">
            GLOWVIA ADMIN
          </Link>
          <Link className="text-pink text-decoration-none" to="/">
            Back to storefront
          </Link>
        </div>
        <nav className="border-top" aria-label="Admin forms">
          <div className="container">
            <div className="d-flex flex-nowrap overflow-x-auto">
              {adminPages.map(({ label, path }) => (
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-nowrap px-3 py-3${isActive ? ' text-pink fw-semibold border-bottom border-2 border-danger' : ''}`
                  }
                  end
                  key={path}
                  to={`/admin/${path}`}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="container py-5">
        <div className="mx-auto admin-form-content">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export function AdminWelcome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p className="text-muted mb-0">Choose a form from the navigation bar above.</p>
    </div>
  )
}

export default AdminForms