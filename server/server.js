const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('/movies', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            res.status(400).send({ error: 'Bad Request' });
            return;
        } else {
            fs.readFile('./data.json', "utf-8", (err, data) => {
                if (err) throw err;
                res.send(data);
            });
        }
    }, 1500);
});

app.listen(8080, () => {
    console.log('Server started at port 8080!');
});
