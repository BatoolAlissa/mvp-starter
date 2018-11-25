var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');


var app = express();


app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/add', function (req, res) {
	var ticket = req.body.ticket
	console.log('ticket',req)
	items.save(ticket);
	res.send('POST request to the homepage')
 })


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});



app.listen(process.env.PORT|| 3000, function() {
  console.log('listening on port 3000!');
});

