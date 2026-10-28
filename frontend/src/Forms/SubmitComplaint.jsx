import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitComplaintAxiosFunction } from '../service/api';

const complaintSchema = z.object({
  orderId: z.string().trim().min(1, 'Order ID is required'),
  subject: z.string().trim().min(1, 'Subject is required'),
  message: z.string().trim().min(1, 'Message is required'),
});

function SubmitComplaint() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(complaintSchema),
    defaultValues: { orderId: '', subject: '', message: '' },
  });

  const handleFormSubmit = async (formData) => {
    console.log('Complaint Submitted:', formData);
    await submitComplaintAxiosFunction(formData);
    alert('Complaint Submitted!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '480px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Submit Complaint</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Order ID</label>
            <input type="text" className="form-control" {...register('orderId')} />
            {errors.orderId && <span className="text-danger">{errors.orderId.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" {...register('subject')} />
            {errors.subject && <span className="text-danger">{errors.subject.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" {...register('message')}></textarea>
            {errors.message && <span className="text-danger">{errors.message.message}</span>}
          </div>
          <button type="submit" className="btn btn-pink w-100">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint;