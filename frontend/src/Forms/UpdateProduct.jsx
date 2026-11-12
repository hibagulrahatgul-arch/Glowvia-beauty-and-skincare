import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getProduct, updateProductAxiosFunction } from '../service/api';

const updateProductSchema = z.object({
  productId: z.string().min(1, 'Select a product'),
  price: z.string().refine((value) => value === '' || Number(value) > 0, 'Price must be greater than 0'),
  quantity: z.string().refine((value) => value === '' || (Number.isInteger(Number(value)) && Number(value) > 0), 'Quantity must be a positive whole number'),
});

function UpdateProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateProductSchema),
    defaultValues: { productId: '', price: '', quantity: '' },
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProduct();
        setProducts(result.data);
      } catch (error) {
        console.error(
          'Error fetching products:',
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const selectedProduct = products.find(
        (product) => product.name === formData.productId
      );
      if (!selectedProduct) {
        alert('Product not found. Please refresh and try again.');
        return;
      }

      await updateProductAxiosFunction(formData.productId, {
        price: formData.price === '' ? selectedProduct.price : Number(formData.price),
        quantity: formData.quantity === '' ? selectedProduct.quantity : Number(formData.quantity),
      });
      alert('Product Updated!');
    } catch (error) {
      console.error(
        'Error updating product:',
        error.response?.data || error.message
      );
      alert('Failed to update product!');
    }
  };

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Update Product</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <select className="form-select" {...register('productId')}>
              <option value="">
                {loading ? 'Loading products...' : '-- Choose Product --'}
              </option>
              {products.map((product) => (
                <option key={product._id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            {errors.productId && <span className="text-danger">{errors.productId.message}</span>}
            {!loading && products.length === 0 && (
              <span className="text-muted">No products available to update</span>
            )}
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