import express from 'express';
import configViewEngine from './configs/viewengine';
require('dotenv').config();

const app = express();
const port = process.env.PORT;
configViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})