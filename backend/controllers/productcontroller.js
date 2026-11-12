import Product from "../models/products.js";

export const getProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error fetching products: " + error);
  }
};

// Naya product database mein save karta hai.
export const addProductController = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  newProduct.save()
    .then(() => res.status(201).send("Product added successfully"))
    .catch((error) =>
      res.status(500).send("Error adding product: " + error)
    );
};

// Product ke naam ke zariye uski qeemat aur quantity update karta hai.
export const updateProductController = (req, res) => {
  Product.findOneAndUpdate(
    { name: req.params.name },
    {
      price: req.body.price,
      quantity: req.body.quantity,
    },
    { new: true, runValidators: true }
  )
    .then((product) => {
      // Product na milne par 404 response bheja jata hai.
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.send("Product updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating product: " + error)
    );
};

// Product ko uske naam ke zariye database se delete karta hai.
export const deleteProductController = (req, res) => {
  Product.findOneAndDelete({ name: req.params.name })
    .then((product) => {
      // Product na milne par 404 response bheja jata hai.
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.send("Product deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting product: " + error)
    );
};
