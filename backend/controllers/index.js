const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const basename = path.basename(module.filename);

// fs
//   .readdirSync(__dirname)
//   .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach(file => {
//     const fileName = file.substr(0, file.length - 3);
//     router.use(`/${fileName}`, require(`./${fileName}`).registerRouter());
//   });

// router.use('/login', require('./login'));
// router.use('/signup', require('./signup'));

router.use('/api/auth', require('./auth'));
router.use('/api/user', require('./users'));
router.use('/api/pet', require('./pets'));

module.exports = router;
