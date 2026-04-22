const express = require('express');
const router = express.Router();
const { getHome, createShortUrl, redirectUrl } = require('../controllers/url-controller');

router.get('/', getHome);
router.post('/shorten', createShortUrl);
router.get('/:shortUrl', redirectUrl);

module.exports = router;