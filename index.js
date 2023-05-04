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


  // category id wise data
  app.get('/chefDetails/:id', (req, res) => {
    const categoryId = req.params.id;
    const category = chefDetails.find(item => item.id === categoryId);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  });
  

app.listen(port, () => {
  console.log(`cuisine api is running on the port ${port}`);
});