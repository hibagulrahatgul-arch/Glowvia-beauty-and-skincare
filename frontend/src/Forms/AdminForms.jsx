import RoleDashboard from './RoleDashboard.jsx';

const adminForms = [
  { label: 'Admin Login', path: '/admin/admin-login' },
  { label: 'Add Product', path: '/admin/add-product' },
  { label: 'Update Product', path: '/admin/update-product' },
  { label: 'Delete Product', path: '/admin/delete-product' },
  { label: 'View Products', path: '/admin/view-products' },
  { label: 'Manage Complaints', path: '/admin/manage-complaints' },
  { label: 'Manage Membership', path: '/admin/manage-membership' },
];

function AdminForms() {
  return <RoleDashboard role="Admin" basePath="/admin" forms={adminForms} />;
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