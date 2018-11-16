'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASS
});


app.get('/', (req, res) => {
        connection.query(
        'SELECT * FROM `employee` WHERE FName = ?', [req.query.name], (err, results, fields) => {
	console.log(err);
        if (err) res.send('DB failed...Sorry!');
        res.send(results);
  });
});




app.listen(process.env.APP_PORT);
