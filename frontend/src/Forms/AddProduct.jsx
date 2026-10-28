import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addProductAxiosFunction } from '../service/api';

const productSchema = z.object({
  name: z.string().trim().min(1, 'Product name is required'),
  category: z.string().trim().min(1, 'Category is required'),
  price: z.string().trim().min(1, 'Price is required').refine((value) => Number(value) > 0, 'Price must be greater than 0'),
  quantity: z.string().trim().min(1, 'Quantity is required').refine((value) => Number.isInteger(Number(value)) && Number(value) > 0, 'Quantity must be a positive whole number'),
});

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: { name: '', category: '', price: '', quantity: '' },
  });
//form submittion
  const handleFormSubmit = async (formData) => {
  try {
    console.log("New Product:", formData);

    const response = await addProductAxiosFunction({
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    });

    console.log("Response:", response);
    alert("Product Added Successfully!");

  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    alert("Failed to add product!");
  }
};

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Add Product</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" {...register('name')} />
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input type="text" className="form-control" {...register('category')} />
            {errors.category && <span className="text-danger">{errors.category.message}</span>}
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Price (Rs.)</label>
              <input type="number" className="form-control" {...register('price')} />
              {errors.price && <span className="text-danger">{errors.price.message}</span>}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input type="number" className="form-control" {...register('quantity')} />
              {errors.quantity && <span className="text-danger">{errors.quantity.message}</span>}
            </div>
          </div>
          <button type="submit" className="btn btn-pink w-100">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;