var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {

    var db = req.connection;
    var data = '';

    db.query('SELECT * FROM product', function(req, rows) {
        data = rows;
        console.log(data);
        res.render('products', { title: 'Product List', data: data });
    })

});

module.exports = router;