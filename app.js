// Veiw tables
// Make Res button /reserve /home /tables

// make ressies


// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

const tables = [
    {
        id: "",
        name: "",
        email: "",
        phone: "",
        pax: ""
      }
];
const waitlist = [
    {
        id: "",
        name: "",
        email: "",
        phone: "",
        pax: ""
      }
];

// HTML
app.get('/')
app.get('/reservations/new')
app.get('/reservations/view')

// API
app.get('/api/waitlist/all')
app.get('/api/reservations/all')
app.post('/api/reservations/create')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



  // Basic route that sends the user first to the AJAX Page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservations/home.html"));
  });

  app.get("/reservations/new", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservations/new.html"));
  });

  app.get("/reservations/view", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservations/view.html"));
  });



  app.listen(PORT, function() {
      console.log("Listening on " + PORT);
  })
  