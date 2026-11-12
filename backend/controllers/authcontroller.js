import User from "../models/users.js";

// Naye user ko database mein register karta hai.
export const authController = (req, res) => {
  const { name, email, phone, password } = req.body;

  // Request ke data se user ka naya record banaya jata hai.
  const newUser = new User({
    name: name,
    email: email,
    phone: phone,
    password: password,
  });

  newUser.save()
    .then(() => res.status(201).send("User registered successfully"))
    .catch((error) =>
      res.status(500).send("Error registering user: " + error)
    );
};

// Email aur password ke zariye user ka login check karta hai.
export const authLoginController = (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      // Agar matching user na mile to login reject hota hai.
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }

      res.send("Login successful");
    })
    .catch((error) =>
      res.status(500).send("Error logging in: " + error)
    );
};