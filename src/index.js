const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! developing dsqd');
});

const USER = 'root';
const PASSWORD = "example";
const HOST = 'mongo';
const DB_PORT = 27017;

const URL = `mongodb://${USER}:${PASSWORD}@${HOST}:${DB_PORT}`

mongoose.connect(URL).then(()=> {
    console.log("Connect success");
}).catch( err => {
    console.log("Connect failed");
    console.log(err);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
