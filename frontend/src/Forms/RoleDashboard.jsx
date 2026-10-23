import { Link, Outlet } from 'react-router-dom';

function RoleDashboard({ role, basePath, forms }) {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold text-pink mb-0" to={basePath}>
            GLOWVIA {role.toUpperCase()}
          </Link>
          <Link className="text-pink text-decoration-none" to="/">
            Back to storefront
          </Link>
        </div>
        <nav className="border-top" aria-label={`${role} forms`}>
          <div className="container py-3">
            <div className="d-flex flex-wrap gap-2">
              {forms.map((form) => (
                <Link key={form.path} className="btn btn-pink text-nowrap" to={form.path}>
                  {form.label}
                </Link>
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
  );
}

export default RoleDashboard;
