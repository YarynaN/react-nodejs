const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req, res, next) => {
    res.json({"foo": "bar"});
});

app.listen(port, () => {
    console.log('app is running');
});

module.exports = app;