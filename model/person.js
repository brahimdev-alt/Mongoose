const mongoose = require('mongoose');

// Définir le schéma
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String], // Tableau de chaînes de caractères
});

// Créer et exporter le modèle
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
