// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Name = require('./NameModal');
const func = require('./func');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/NameStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.post('/api/names', async (req, res) => {
  console.log("upar wala");
  console.log(req.body);
  try {
    const newName =  await Name.create( req.body );
    console.log(newName);
    res.status(201).json(newName); // Return the created object in the response
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to insert name.' });
  }
});

app.get('/api/names', async (req, res) => {
  // console.log(req);
  // console.log(res);
  console.log("niche wala");
  try {
    const names = await Name.find();
    res.json(names);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve names.' });
  }
});

app.get("/", (req, res)=>{
  res.send("chal gya!!!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
