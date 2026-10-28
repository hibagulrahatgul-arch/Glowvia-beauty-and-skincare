import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { updateProductAxiosFunction } from '../service/api';

const dummyProducts = [
  { id: 1, name: 'Hydrating Face Serum' },
  { id: 2, name: 'Vitamin C Face Cream' },
  { id: 3, name: 'Gentle Face Wash' },
  { id: 4, name: 'Lip Care Balm' },
];

const updateProductSchema = z.object({
  productId: z.string().min(1, 'Select a product'),
  price: z.string().refine((value) => value === '' || Number(value) > 0, 'Price must be greater than 0'),
  quantity: z.string().refine((value) => value === '' || (Number.isInteger(Number(value)) && Number(value) > 0), 'Quantity must be a positive whole number'),
});

function UpdateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateProductSchema),
    defaultValues: { productId: '', price: '', quantity: '' },
  });

  const handleFormSubmit = async (formData) => {
    console.log('Updated Product:', formData);
    const { productId, ...productData } = formData;
    await updateProductAxiosFunction(productId, productData);
    alert('Product Updated!');
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Update Product</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <select className="form-select" {...register('productId')}>
              <option value="">-- Choose Product --</option>
              {dummyProducts.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
            {errors.productId && <span className="text-danger">{errors.productId.message}</span>}
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">New Price (Rs.)</label>
              <input type="number" className="form-control" {...register('price')} />
              {errors.price && <span className="text-danger">{errors.price.message}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">New Quantity</label>
              <input type="number" className="form-control" {...register('quantity')} />
              {errors.quantity && <span className="text-danger">{errors.quantity.message}</span>}
            </div>
          </div>
          <button type="submit" className="btn btn-pink w-100">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;