const db = require('./index.js');

const insertCamp = (park, campsite, checkindate, checkoutdate, callback) => {
  const campQuery = `INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES ("${park}", "${campsite}", "${checkindate}", "${checkoutdate}")`;
  db.connection.query(campQuery, (err) => {
    if (err) { throw err; }
    callback(null);
  });
};

const insertTools = (, callback) => {
  const toolsQuery = '';
  db.connection.query(toolsQuery, (err) => {
    if (err) { throw err; }
    callback(null)
  })
}

module.exports = { insertCamp }