const express = require('express');
const fs = require('fs');

const app = express();

app.get('/movies', (req, res) => {
    fs.readFile('./data.json', "utf-8", (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

app.listen(3000, () => {
    console.log('Server started at port 3000!');
});
