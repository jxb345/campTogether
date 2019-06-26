const db = require('./index.js');


const insertCamp = (park, campsite, checkindate, checkoutdate) => {
  db.connection.query(`INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES (${park}, ${campsite}, ${checkindate}, ${checkoutdate})`);
};

module.exports = { insertCamp }