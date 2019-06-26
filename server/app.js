const express = require('express');
const path = require('path');
const app = express();
const models = require('../database/models.js')

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(express.urlencoded( { extended: true }));

app.post('/parkInfo', (req, res) => {
  console.log('req.body', req.body);
  const park = req.body.park;
  const campsite = req.body.campsite;
  const checkIn = req.body.checkIn;
  const checkOut = req.body.checkOut;
  models.insertCamp(park, campsite, checkIn, checkOut);

  res.status(200);
})

app.listen(4000, () => {
  console.log('Listening on 4000')
});