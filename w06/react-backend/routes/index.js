var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '405410324', name: '呂丞凱' });
});

module.exports = router;