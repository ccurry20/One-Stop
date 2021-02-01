const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("./users-model.js");
const restricted = require("../auth/auth-required-middleware.js");

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    db.findBy({ email })
      .first()
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `welcome ${email}` });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
});

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  db.add(registered).then((added) => res.status(201).json(added));
});

router.get("/users", restricted, (req, res) => {
  db.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: `Internal Server Error: ${err}` });
    });
});

module.exports = router;
