/**
 * Created by yangsong on 2017-11-14.
 */


var express = require('express');
var router = express.Router();
var database=require('../service/data.js');
var pageDd=database.ConnetcDb("page");
var contentDb=database.ConnetcDb("content");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/main/1.html');

});
module.exports = router;