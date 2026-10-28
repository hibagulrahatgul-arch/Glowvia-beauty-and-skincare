import User from "../models/users.js";

export const authController = (req, res) => {
  const { name, email, phone, password } = req.body;

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

export const authLoginController = (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }

      res.send("Login successful");
    })
    .catch((error) =>
      res.status(500).send("Error logging in: " + error)
    );
};