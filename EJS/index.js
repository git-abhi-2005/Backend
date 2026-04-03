const express = require('express');
const app = express();
const users = require('./users_400.json');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/user', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post('/users', (req, res) => {
    const newData = {
        "id": 401,
        "name": "User1",
        "email": "user1@example.com",
        "address": "Street 1, City 43, Country",
        "contact": "+918470273434"
    };

    const data = JSON.parse(fs.readFileSync('./users_400.json', 'utf-8'));
    data.push(newData);
    fs.writeFileSync('./users_400.json', JSON.stringify(data));

    res.send("Data appended");
});

app.patch('/api/user/:id', (req, res) => {
    //will do with mongo
});

app.delete('/api/user/:id', (req, res) => {
    //will do with mongo
});

app.listen(9956, () => {
    console.log('Server running on http://localhost:9956');
});
// app.set('view engine', 'ejs');

// app.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// });
// function requireToken(req, res, next) {
//     if (req.query.token === 'secret') {
//         return next();
//     }
//     res.status(401).send('Unauthorized: token is required');
// }
// app.get('/', (req, res) => {
//     res.render('home', { name: 'Abhishekh' });
// });
// app.get('/protected', requireToken, (req, res) => {
//     res.send('Protected content');
// });
// app.listen(3000, () => {
//     console.log('Server listening on http://localhost:3000');
// }); 