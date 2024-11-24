const express = require('express');
const connectDB = require('./config/database');
const Person = require('./models/Person');

const app = express();
const PORT = 5000;


connectDB('http://localhost:27017');


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'API de gestion des personnes avec Mongoose !');
});

app.post('/add-person', async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;

    const newPerson = new Person({ name, age, favoriteFoods });
    const savedPerson = await newPerson.save();

    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/find-person/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const people = await Person.find({ name });
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${5000}`);
});
