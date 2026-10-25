import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { customersignupaxiosfunction } from '../service/api';

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
  const [submitMessage, setSubmitMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', phone: '', password: '', confirmPassword: '' },
  });

async function onSubmit(data) {
    setSubmitMessage(null);
    try {
      const response = await customersignupaxiosfunction(data);
      setSubmitMessage({
        type: 'success',
        text: typeof response === 'string' ? response : 'Account created successfully.',
      });
    } catch (error) {
      const responseMessage = error.response?.data || error.message;
      setSubmitMessage({
        type: 'danger',
        text: typeof responseMessage === 'string' ? responseMessage : 'Unable to create your account.',
      });
    }
  }



  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '480px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Customer Sign Up</h3>
        {submitMessage && (
          <div className={`alert alert-${submitMessage.type}`} role="alert">
            {submitMessage.text}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className="btn btn-pink w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSignUp;