const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('/movies', (req, res) => {
    setTimeout(() => {
        fs.readFile('./data.json', "utf-8", (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    }, 2000);
});

app.listen(8080, () => {
    console.log('Server started at port 8080!');
});
