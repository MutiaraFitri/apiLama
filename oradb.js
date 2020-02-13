// myscript.js
// This example uses Node 8's async/await syntax.
const express = require('express');
const app = express();
const port = 3000;

const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = "password"  // set mypw to the hr schema password

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "dimas",
      password      : mypw,
      connectString : "localhost/dimasdatabase"
    });

    const result = await connection.execute(
      `SELECT *
       FROM dimas`  // bind value for :id
    );
    console.log(result.rows);
    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
    app.get('/', (req, res) => {
        res.send(result.rows);
    });
    

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();