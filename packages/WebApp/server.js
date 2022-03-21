const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const path = require('path');
// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
const { response } = require('express');

var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
});

// apply rate limiter to all requests
app.use(limiter);

app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('/users', async (req, res) => {
  const result = await axios('https://jsonplaceholder.typicode.com/users');
  res.send(result.data);
});

app.get('/home', async (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
