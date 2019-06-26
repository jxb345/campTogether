const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));

// app.get('/', (req, res) => {
//   res.send('Hi from GET request');
// })

app.listen(4000, () => {
  console.log('Listening on 4000')
});