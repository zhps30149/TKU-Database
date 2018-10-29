var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {

    var db = req.connection;
    var data = '';

    db.query('SELECT * FROM product', function(err, rows) {

        if (err) {
            console.log(err);
        }

        data = rows;
        console.log(data);
        res.render('products', { title: 'Product List', data: data });
    })

});

router.get('/edit', function(req, res, next) {

    var db = req.connection;
    var id = req.query.id;

    db.query('SELECT * FROM product where id = ?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        console.log(data);
        res.render('productEdit', {
            title: 'Product Edit',
            data: data
        });
    })

});

router.post('/edit', function(req, res, next) {
    var db = req.connection;
    var id = req.body.id;
    var sql = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    var qur = db.query('UPDATE product SET ? WHERE id = ?', [sql, id], function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    });

});

router.get('/delete', function(req, res, next) {

    var db = req.connection;
    var id = req.query.id;

    db.query('DELETE FROM product where id = ?', id, function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/products');
    })

});

module.exports = router;