var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});

/*GET Tiffany */
router.get('/Tiffany', function(req, res, next) {
  //load the Tiffany.ejs view
  res.render('Tiffany');
});
/*GET Deborah */
router.get('/Deborah', function(req, res, next) {
    //load the Deborah.ejs view
    res.render('Deborah');
});
/*GET Billy */
router.get('/Billy', function(req, res, next) {
    //load the Billy.ejs view
    res.render('Billy');
});
/*GET Jay */
router.get('/Jay', function(req, res, next) {
    //load the Jay .ejs view
    res.render('Jay');
});
module.exports = router;
