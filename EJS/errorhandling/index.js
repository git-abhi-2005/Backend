const express = require('express');
const app = express();
const errorHandler = require('./errorhandle/error');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.status = 'fail';
    next(err);
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});