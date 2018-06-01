const express = require('express');
const router = express.Router();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Easy MTPorto',
      server: config.server,
      port: config.port,
      secret: config.secret
  });
});

module.exports = router;
