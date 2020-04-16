
var express = require ("express")
var app = express ()

var  products= require ('./productsController')

app.use ('/service',products)



app.listen (8080)

