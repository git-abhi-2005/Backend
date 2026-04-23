const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("name", "secFB", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });
    res.send("Cookie set ho gayi");
});

app.listen(9956, () => {
    console.log("Server running on http://localhost:9956");
});
// // Home
// app.get('/', (req, res) => {
//     res.send("Server chal raha hai 🚀");
// });

// // Set Cookie
// app.get('/set', (req, res) => {
//     res.cookie("user", "Abhi");
//     res.send("Cookie set ho gayi");
// });

// // Get Cookie
// app.get('/get', (req, res) => {
//     res.send(req.cookies);
// });

// // Delete Cookie
// app.get('/delete', (req, res) => {
//     res.clearCookie("user");
//     res.send("Cookie delete ho gayi");
// });

// app.listen(9956, () => {
//     console.log("Server running on http://localhost:9956");
// });