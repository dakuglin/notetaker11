const express = require("express");
const app = express();
const PORT = 3000;

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//always needs to be in your server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes); 
app.use("/", htmlRoutes); 

//app.listen(PORT, () => console.log("App, listening on PORT" + PORT));

app.listen(PORT, function() {
    console.log("App, listening on PORT" + PORT) //express in listening if anyone makes a request of it
});