const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
function requireToken(req, res, next) {
    if (req.query.token === 'secret') {
        return next();
    }
    res.status(401).send('Unauthorized: token is required');
}
app.get('/', (req, res) => {
    res.render('home', { name: 'Abhishekh' });
});
app.get('/protected', requireToken, (req, res) => {
    res.send('Protected content');
});
app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
}); 