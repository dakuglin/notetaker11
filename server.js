// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

//Required In Information
//============================================================
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes2");

//always need, sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes); 
app.use("/", htmlRoutes); 

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App, listening on PORT " + PORT) //express is listening for request
});

