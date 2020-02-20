var mysql = require('mysql');

var con = mysql.createConnection({
  host: "165.22.110.126",
  user: "root",
  password: "Kjkszpj2@)!(",
  database: "tugas_akhir"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;