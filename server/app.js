const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(express.urlencoded( { extended: true }));

app.post('/parkInfo', (req, res) => {
  console.log('req.body', req.body);
  res.status(200);
})

app.listen(4000, () => {
  console.log('Listening on 4000')
});