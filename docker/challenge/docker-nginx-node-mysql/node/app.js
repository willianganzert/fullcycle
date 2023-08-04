const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const app = express();

dotenv.config()
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};
console.log(JSON.stringify(dbConfig))
const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if(err) {
        console.log('Error connecting to Db', err);
        return;
    }
    console.log('Connection established');
});

app.get('/', (req, res) => {
    const name = `Pessoa ${Math.floor(Math.random() * 100)}`

    db.query(`INSERT INTO people (name) VALUES ('${name}')`)
    db.query('SELECT * FROM people', (err, rows) => {
        if(err) throw err;

        res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${rows.map(person => `<li>ID: ${person.id}, Name: ${person.name}</li>`).join('')}
      </ul>
    `);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
