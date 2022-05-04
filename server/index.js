var express = require("express");
const cors = require('cors');

//DATABASE
var mysql = require('mysql');  //npm install mysql

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "deliveboo"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
//END DATABASE

var PORT = process.env.PORT || 3001;

var app = express();
app.use(cors());

app.get('/api', (req, res) => {
    con.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.json({ result: result });
          });
});


app.get('/api/:id', (req, res) => {
    con.query(`SELECT * FROM users WHERE id = ${req.params.id}`, function (err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.json({ result: result });
          });
});

app.get('/api/:id/dishes', (req, res) => {
    con.query(`SELECT * FROM dishes WHERE user_id = ${req.params.id}`, function (err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.json({ result: result });
          });
});

app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
