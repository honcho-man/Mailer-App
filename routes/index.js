const express = require('express');
const router = express.Router();
const control = require('../controllers/index')

/* GET home page. */
router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Email App' });
  })
  .post('/send-email', control.sendMail)

module.exports = router;
