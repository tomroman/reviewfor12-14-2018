var express = require('express');
var path = require('path');
var app = express();

var PORT = 3001;

var reservations = [
  {
    routeName: "nameOne",
    name: "Name One",
    party_size: 4,
    phone_numb: 1234567890
  },
{

}]
 
app.get('/', function (req, res) {
  res.send('Welcome to Hot Restaurant')
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservation;
  console.log(chosen);

  // Filter to show only the selected character
  for (var i = 0; i < reservation.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  // Otherwise display "No character found"
  return res.send("Reservation not found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});