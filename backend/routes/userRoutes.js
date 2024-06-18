const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Register a new user (Step 1)
router.post("/register/step1", async (req, res) => {
  try {
    const { nome, idade, email, senha, telefone } = req.body;
    const user = new User({ nome, idade, email, senha, telefone });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Complete user registration (Step 2)
router.post("/register/step2/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { altura, peso, praticaAtividadeFisica } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      {
        altura,
        peso,
        praticaAtividadeFisica,
      },
      { new: true }
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
