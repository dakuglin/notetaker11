//Required In Information
//============================================================
var router = require('express').Router();
var fs = require("fs");
//const util = require("util");
const uuidv1 = require("uuid");

  
//Routes
// ===========================================================

//browser wants to get information from the server,  telling express to expect to find information
router.get("/notes", function(req, res) { //retrieving data and pushing it back to client 

    fs.readFile("db/db.json", function(err, data) { //reading the db.json file
        
        var updatedNotes = []; //empty array to store notes after being read

        if (err) {
            console.log(err);
        }

        updatedNotes = JSON.parse(data) || []; //converting JSON string into JS object
        console.log(updatedNotes);
        res.send(updatedNotes); //seding the parsed JS object back to undatedNotes array
        
    });
       
});

//browser wants to post to the server, telling express to expect to recieve information
router.post("/notes", function(req, res) {
 
    var existingNotes = [];
    const note = req.body; //this is the resposne from postman for testing 


    fs.readFile("db/db.json", function(err, data) {
      
        if (err) {
            console.error(err)
        }

        existingNotes = JSON.parse(data) || []; //converting JSON string into JS object
        console.log(`existing=${JSON.stringify(existingNotes)}`); //taking JS object and turning it back into JSON string
        //note.id = uuidv1()
        note.id = Math.floor(Math.random() * 30000) + 1 //andom id index being assigned it to  
        console.log(note)
        existingNotes.push(note) //pushing our test from postman to our existingNotes array
        console.log(`updatedNotes=${existingNotes}`)

        fs.writeFile("db/db.json", JSON.stringify(existingNotes), function(err) { //writing to JSON file

            if(err) {
                console.log("error!");
            }
        
        })

        res.send(existingNotes) //pushing the JSON string back to existingNotes array
       
    })

});

router.delete("/notes/:id", function(req, res) {

    var id = parseInt(req.params.id)  //req.params.id  vs req.query.id
    console.log(id); //the id of the element we want to delete
    var existingNotes = [];

    fs.readFile("db/db.json", function(err, data) {
       
        if (err) {
            console.error(err)
        }

        existingNotes = JSON.parse(data) || [];
        console.log(`existingNotes=${JSON.stringify(existingNotes)}`);
        var filteredNotes = []; //array of filtered notes with deleted elements removed

        for (var i=0; i < existingNotes.length; i++) {
            console.log(existingNotes[i])
            var element = existingNotes[i];

            if(element.id !== id) {
                filteredNotes.push(element) //pushing elements that are not equal to the elements being deleted to the filtered array
            }
        }
        
        fs.writeFile("db/db.json", JSON.stringify(filteredNotes), function(err) { //writing fitered     notes to  JSON file

            if(err) {
                console.log("error!");   
            }
        })

        res.send(filteredNotes) //pushing the JSON string back to fiteredNotes array

    })

});

 module.exports = router;
