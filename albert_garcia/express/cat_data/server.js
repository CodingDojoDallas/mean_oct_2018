// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

console.log("Let's find out what app is", app);

app.get('/cats', function(request, response) {
  // just for fun, take a look at the request and response objects
 console.log("The request object", request);
 console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('cats');
})
app.get('/cats/1', function(request, response) {
  // just for fun, take a look at the request and response objects
    console.log("The request object", request);
    console.log("The response object", response);
    var cat_array = [
      {name: "Garfield", 
      food: "lasagna",
      image: "/cat1.jpg",
      spots: ["floor", "chair", "sunbeam"]
    }
    ];
 // use the response object's .send() method to respond with an h1
 response.render('data', {cats: cat_array});
})
app.get('/cats/2', function(request, response) {
  // just for fun, take a look at the request and response objects
    console.log("The request object", request);
    console.log("The response object", response);
    var cat_array = [
      {name: "Fluffy", 
      food: "Tuna",
      image: "/cat2.jpeg",
      spots: ["floor", "chair", "sunbeam"]
    }
    ];
 // use the response object's .send() method to respond with an h1
 response.render('data', {cats: cat_array});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})