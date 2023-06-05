const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');

const routeHandler = require('./src/routes');

dotenv.config();
const app = express();

const { mongodbOptions } = require('./src/config');
const { PORT, MONGODB_URI, ENV_MODE } = process.env;

mongoose.set('strictQuery', false);

mongoose.connect(
  process.env.DB_URL,
  {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      autoIndex: true
  }
).then(()=>{
  console.log("Connected successfully");
}).catch((error)=>{
  console.log("Unable to connect");
  console.error(error);
})

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/api/', routeHandler);
app.use((req, res) => res.status(404).json({ error: 'We cannot get what you are looking for!' }));

app.listen(PORT, () => {
  console.log(`APP RUNNING ON PORT 5000`);
});
