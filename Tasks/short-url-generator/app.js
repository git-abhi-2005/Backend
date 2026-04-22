const express = require('express');
const connectDB = require('./config/db');
const urlRoutes = require('./routes/url-rout');

const app = express();

// DB connect
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');

// routes
app.use('/url', urlRoutes);

// root redirect
app.get('/', (req, res) => {
    res.redirect('/url');
});

// server
const PORT = 9956;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});