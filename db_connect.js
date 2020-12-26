const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
      host: 'localhost', 
      user:'root',
      password: '',
      database: 'employee_db'
    });
conn.connect(err => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
  }
});

module.exports = conn;