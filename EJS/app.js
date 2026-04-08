const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

app.post('/user', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(8000, () => {
    console.log("Server running on port 8000");
});