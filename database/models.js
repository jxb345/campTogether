const db = require('./index.js');

const insertCamp = (park, campsite, checkindate, checkoutdate, callback) => {
  const campQuery = `INSERT into camp (park, campsite, checkindate, checkoutdate) VALUES ("${park}", "${campsite}", "${checkindate}", "${checkoutdate}")`;
  db.connection.query(campQuery, (err) => {
    db.connection.query(`SELECT id FROM camp WHERE park = "${park}"`, (err, id) => {
      if (err) { throw err; }
      console.log('id', id)
      callback(null, id);
    })
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
  tools.push('camp_id');
  const columns = tools.toString();
  const id = Number(list.id);
  console.log('values', values);
  console.log('id', typeof id);
  const toolsQuery = `INSERT into tools (${columns}) VALUES (${values}, ${id})`;
  db.connection.query(toolsQuery, (err) => {
    if (err) { throw err; }
    db.connection.query(`SELECT * FROM tools WHERE camp_id = ${id}`, (err, results) => {
      if (err) { throw err; }
      let updatedList = results[0]
      console.log('updatedList', updatedList);
      callback(null, updatedList)
    })

  })
}

module.exports = { insertCamp , insertTools }