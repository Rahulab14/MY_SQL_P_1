const express = require('express');
const mysql = require('mysql2');

require('dotenv').config();
const app = express();
const port = process.env.PORT;


const db = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.USER_SQL
});

db.connect((err) => {
  if (err){
    console.error('Not Connected to MYSQL!!!')
  }
  else{

    console.log('Connected to MySQL!');
  }
});

app.get('/', (req, res) => {
  res.send('Hello from Express + MySQL!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});