import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { deleteProductAxiosFunction, getProduct } from '../service/api';

const deleteProductSchema = z.object({
  productId: z.string().min(1, 'Select a product to discontinue'),
});

function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deleteProductSchema), defaultValues: { productId: '' } });

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
        alert('Failed to load products!');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFormSubmit = async ({ productId }) => {
    const confirmDelete = window.confirm('Are you sure you want to discontinue this product?');
    if (confirmDelete) {
      try {
        await deleteProductAxiosFunction(productId);
        setProducts((currentProducts) =>
          currentProducts.filter((product) => product.name !== productId)
        );
        console.log('Discontinued Product:', productId);
        alert('Product Discontinued!');
        reset();
      } catch (error) {
        console.error(
          'Error deleting product:',
          error.response?.data || error.message
        );
        alert('Failed to discontinue product!');
      }
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
              <span className="text-muted">No products available to discontinue</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-pink w-100"
            disabled={loading || products.length === 0}
          >
            Discontinue Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;