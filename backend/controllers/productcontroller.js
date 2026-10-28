import Product from "../models/products.js";

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
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.send("Product updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating product: " + error)
    );
};

export const deleteProductController = (req, res) => {
  Product.findOneAndDelete({ name: req.params.name })
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.send("Product deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting product: " + error)
    );
};
