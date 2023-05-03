const express = require('express');
const cors = require('cors');

// server end setup
const app = express();
const port = process.env.PORT || 6001;

// to call from other api
app.use(cors());

app.get('/', (req, res) => {
  res.send('La cuisine is running');
});

app.listen(port, () => {
  console.log(`cuisine api is running on the port ${port}`);
});