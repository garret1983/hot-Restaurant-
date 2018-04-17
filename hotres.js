var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reservation/:list", function(req, res) {
  var listed = req.params.list;

  console.log(listed);

  for (var i = 0; i < reservations.length; i++) {
    if (listed === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

app.post("/api/reservations", function(req, res) {

  var newReservation = req.body;

 
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation)

  characters.push(newReservation);

  res.json(newReservation);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


