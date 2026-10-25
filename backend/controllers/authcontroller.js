import User from "../models/users.js";

export const authController = (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

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