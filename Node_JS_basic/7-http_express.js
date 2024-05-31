const express = require('express');
const countStudent = require('./3-read_file_async');

const app = express();
const port = 1245;

const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudent(path);
    res.send(`This is the list of our students\n${data}`);
    res.end();
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
    res.status(500).end();
  }
});

app.listen(port);
module.exports = app;
