var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MumutDimas@)!&",
  database: "tugas_akhir"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;