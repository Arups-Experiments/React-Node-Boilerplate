const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const path = require('path');
const { response } = require('express');

app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('/users', async (req, res) => {
  const result = await axios('https://jsonplaceholder.typicode.com/users');
  res.send(result.data);
});

app.get('/dogs', async (req, res) => {
  const result = await axios('https://dog.ceo/api/breeds/image/random');
  res.send(result.data);
});

app.get('/home', async (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
