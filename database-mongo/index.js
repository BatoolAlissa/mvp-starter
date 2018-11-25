var mongoose = require('mongoose');
mongoose.connect('mongodb://batool:test123@ds115664.mlab.com:15664/ticketing');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//create schema
var itemSchema = mongoose.Schema({
  ticket: String,
});

//modle
var Ticket = mongoose.model('Ticket', itemSchema);

// save ticket in DB
  var save = function (data,callback){
      // console.log(data.ticket)
      console.log("db")

    
    var ticket = new Ticket({ticket:data.text});
//this not my code I try it
    ticket.save(function(err){
          if (err) { console.log("error", err)}
          console.log('Saved!')

            callback('Saved!')
      });
  }

var selectAll = function(callback) {
  Ticket.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


module.exports.save = save;
module.exports.selectAll = selectAll;