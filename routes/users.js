var express = require('express');
var router = express.Router();

const { applicationFunction } = require('../controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/application', applicationFunction);

module.exports = router;
