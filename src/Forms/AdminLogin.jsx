import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } });

  const handleFormSubmit = (formData) => {
    console.log('Admin Login:', formData);
    alert('Admin Login Submitted!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Admin Login</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" {...register('email')} />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" {...register('password')} />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <button type="submit" className="btn btn-pink w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;