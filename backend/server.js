const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
require("dotenv/config")

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/storage', storageRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});