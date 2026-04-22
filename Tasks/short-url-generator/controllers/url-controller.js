const Url = require('../models/url-model');
const { nanoid } = require('nanoid');

// Home page
exports.getHome = (req, res) => {
    res.render('index', { shortUrl: null });
};

// Create short URL
exports.createShortUrl = async (req, res) => {
    try {
        const { actualUrl } = req.body;

        const shortUrl = nanoid(6);

        await Url.create({
            shortUrl,
            actualUrl
        });

        res.render('index', { shortUrl });

    } catch (err) {
        res.send(err.message);
    }
};

// Redirect
exports.redirectUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ shortUrl: req.params.shortUrl });

        if (!url) return res.send("Not found");

        res.redirect(url.actualUrl);

    } catch (err) {
        res.send("Server error");
    }
};