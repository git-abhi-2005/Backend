const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));