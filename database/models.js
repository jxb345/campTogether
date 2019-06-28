const db = require('./index.js');

const insertCamp = (park, campsite, checkindate, checkoutdate, callback) => {
  const campQuery = `INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES ("${park}", "${campsite}", "${checkindate}", "${checkoutdate}")`;
  db.connection.query(campQuery, (err) => {
    if (err) { throw err; }
    callback(null);
  });
};

const insertTools = (list, callback) => {
  let tools = [];
  for (key in list) {
    if (list[key] === list.name && key !== "name") {
      tools.push(key);
    }
  }
  let numValues = tools.length;
  let values = '';
  for (let i = 0; i < numValues; i++) {
    values+= `"${list.name}",`;
  }
  values = values.slice(0,-1);
  const columns = tools.toString();
  console.log('values', values);
  const toolsQuery = `INSERT into tools (${columns}) VALUES (${values})`;
  db.connection.query(toolsQuery, (err) => {
    if (err) { throw err; }
    db.connection.query('SELECT * FROM tools', (err, results) => {
      if (err) { throw err; }
      let updatedList = results[0]
      console.log('updatedList', updatedList);
      callback(null, updatedList)
    })

  })
}

module.exports = { insertCamp , insertTools }