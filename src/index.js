const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const Queries = require('./queries');

dotenv.config();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.json({
    message: 'success'
  });
});

app.get('/get-inventaris', Queries.getInventaris);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
