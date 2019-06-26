const db = require('./index.js');


const insertCamp = () => {
  db.connection.query('INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES (win, lose, draw, go)');
};

module.exports = { insertCamp }