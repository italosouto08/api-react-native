const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  telefone: { type: String, required: true },
  altura: { type: Number },
  peso: { type: Number },
  praticaAtividadeFisica: { type: Boolean },
});

module.exports = mongoose.model("users", UserSchema);
