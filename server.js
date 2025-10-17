const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  http.get;
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use('/products', productsRouter);
const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server started!');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log(`Listening on port ${PORT}`);
});
