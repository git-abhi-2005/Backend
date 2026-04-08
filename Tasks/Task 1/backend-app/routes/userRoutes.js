const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Rahul" }
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
});

router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users[index] = {
      id: Number(req.params.id),
      name: req.body.name
    };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
router.patch("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    if (req.body.name) user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;