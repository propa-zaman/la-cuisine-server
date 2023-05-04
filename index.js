const express = require('express');
const cors = require('cors');

// server end setup
const app = express();
const port = process.env.PORT || 6001;

// loading data
const chefDetails = require('./data/chefDetails.json')

// to call from other api
app.use(cors());

app.get('/', (req, res) => {
  res.send('La cuisine is running');
});

// all categories data
app.get('/chefDetails', (req, res) => {
    res.send(chefDetails);
  })

app.listen(port, () => {
  console.log(`cuisine api is running on the port ${port}`);
});