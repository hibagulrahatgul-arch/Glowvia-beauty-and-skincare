import RoleDashboard from './RoleDashboard.jsx';

const groups = {
  Customer: {
    basePath: '/customer',
    forms: [
      { label: 'Login', path: '/customer/login' },
      { label: 'Sign Up', path: '/customer/sign-up' },
      { label: 'Place Order', path: '/customer/place-order' },
      { label: 'Submit Complaint', path: '/customer/submit-complaint' },
    ],
  },
  Rider: {
    basePath: '/rider',
    forms: [
      { label: 'Order Pickup', path: '/rider/order-pickup' },
      { label: 'Order Deliver', path: '/rider/order-deliver' },
    ],
  },
};

function AllForms({ group }) {
  const dashboard = groups[group];

  if (!dashboard) return null;

  return (
    <RoleDashboard
      role={group}
      basePath={dashboard.basePath}
      forms={dashboard.forms}
    />
  );
}

export default AllForms;
