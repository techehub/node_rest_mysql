var express = require ("express")
var router = express.Router()
var bodyParser = require('body-parser')
router.use( bodyParser.json() );    

con= require ('./db')


router.get('/products', function(req, res){

    con.query("SELECT * FROM product", function (err, result, fields) {
      if (err) throw err;
      res.json(result)
     
    }); 
    
  });
  
  router.get('/products/:id', function(req, res){
  
    con.query("SELECT * FROM product where id= ?", req.params.id, function (err, result, fields) {
      if (err) throw err;
      res.json(result)
     
    });   
  });
  
  
  router.post('/products', function(req, res){
  
    var params  = req.body;
    console.log(params.id);
    console.log(params.name);
    console.log(params.price);
  
  
    con.query("insert into product (id, name, description, price) values (?,?,?,?) ", [params.id, params.name, params.description, params.price], function (err, result, fields) {
      if (err) throw err;
      res.json(result)  
    }); 
  
  
  });
  
  
  router.put ("/products/:id", function (req, res){
  
    var id = req.params.id
    var params  = req.body;
  
    con.query(" update product set name= ? , description= ? , price = ? where id = ? ", [ params.name, params.description, params.price, id], function (err, result, fields) {
      if (err) throw err;
      res.json(result)  
    }); 
  
  })
  
  
  router.delete("/products/:id", function (req, res){
    var id = req.params.id
    console.log (id)
    con.query(" delete  from product where id = ? ",  id, function (err, result, fields) {
      if (err) throw err;
      res.json(result)  
    }); 
  
  
  })


module.exports = router
  