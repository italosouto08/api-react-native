const express = require("express");
const users = require("../models/User");
const router = express.Router();

router.post("/register/step1", async (req, res) => {
  try {
    const { nome, idade, email, senha, telefone } = req.body;
    const user = new users({ nome, idade, email, senha, telefone });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/register/step2/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { altura, peso, praticaAtividadeFisica } = req.body;
    const user = await users.findByIdAndUpdate(
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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true };

    const updatedUser = await users.findByIdAndUpdate(id, updates, options);
    if (!updatedUser) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    res.send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await users.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    res.send({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.findById(id);
    if (!user) {
      return res
        .status(404)
        .send({ message: `Usuário com ID ${id} não encontrado` });
    }
    res.set("Content-Type", "application/json");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao buscar usuário" });
  }
});

module.exports = router;
