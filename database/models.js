const db = require('./index.js');

const insertCamp = (park, campsite, checkindate, checkoutdate, callback) => {
  const query = `INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES ("${park}", "${campsite}", "${checkindate}", "${checkoutdate}")`;
  db.connection.query(query, (err, results) => {
    if (err) { throw err; }
    console.log('results', results)
    callback(null, results);
  });
};

module.exports = { insertCamp }