var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check', function(req, res) {
  var responseObj = { message: 'Up and Running' };
  res.send(responseObj);
});

var database = [];

router.post('/ilike/:icecream/:name', function(req, res){
  if(req.body.StudyList){
    var obj = req.body.StudyList;
  //}
  //if(req.body.formfactor){
    console.log(obj);
  }
  else{
    console.log('No StudyList');
  }
  var choice = req.params.icecream;
  var nm = req.params.name;

  database.push({choice: choice, name: nm});
  var responseObj = {message: nm + ' likes ' + choice + '.'};
  res.send(responseObj)

});

router.get('/likes', function(req,res){
  res.send(database);
});

module.exports = router;
