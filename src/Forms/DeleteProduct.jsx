import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum' },
  { id: 2, name: 'Vitamin C Face Cream' },
  { id: 3, name: 'Gentle Face Wash' },
  { id: 4, name: 'Lip Care Balm' },
];

const deleteProductSchema = z.object({
  productId: z.string().min(1, 'Select a product to discontinue'),
});

function DeleteProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deleteProductSchema), defaultValues: { productId: '' } });

  const handleFormSubmit = ({ productId }) => {
    const confirmDelete = window.confirm('Are you sure you want to discontinue this product?');
    if (confirmDelete) {
      console.log('Discontinued Product ID:', productId);
      alert('Product Discontinued!');
      reset();
    }
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Delete Product</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Select Product to Discontinue</label>
            <select className="form-select" {...register('productId')}>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            {errors.productId && <span className="text-danger">{errors.productId.message}</span>}
          </div>
          <button type="submit" className="btn btn-pink w-100">Discontinue Product</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;