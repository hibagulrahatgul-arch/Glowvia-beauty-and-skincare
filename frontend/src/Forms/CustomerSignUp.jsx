import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  password: z.string().min(1, 'Password is required'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password and Confirm Password do not match.',
  path: ['confirmPassword'],
});

function CustomerSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', phone: '', password: '', confirmPassword: '' },
  });

  const handleFormSubmit = (formData) => {
    console.log('Customer Sign Up:', formData);
    alert('Sign Up Successful!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '480px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Customer Sign Up</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" {...register('name')} />
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" {...register('email')} />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" {...register('phone')} />
            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" {...register('password')} />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" {...register('confirmPassword')} />
            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
          </div>
          <button type="submit" className="btn btn-pink w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSignUp;