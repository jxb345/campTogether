const express = require('express');
const path = require('path');
const app = express();
const models = require('../database/models.js')

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(express.urlencoded( { extended: true }));

app.post('/parkInfo', (req, res) => {
  console.log('req.body', req.body);
  const park = req.body.info.park;
  const campsite = req.body.info.campsite;
  const checkIn = req.body.info.checkInDate;
  const checkOut = req.body.info.checkOutDate;
  models.insertCamp(park, campsite, checkIn, checkOut, (err) => {
    if (err) { throw err; }
    console.log('values inserted into db');
    res.send();
  });
});

app.post('/toolsList', (req, res) => {
  console.log('req.body', req.body);
  mode
})

app.listen(4000, () => {
  console.log('Listening on 4000')
});