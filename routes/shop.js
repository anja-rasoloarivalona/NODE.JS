const path = require('path')

const express = require('express');

const rootDir = require('../utilities/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop');


    /*
    console.log('[SHOP.js]', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));*/
});

module.exports = router;