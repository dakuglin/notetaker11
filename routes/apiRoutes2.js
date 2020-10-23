//Required In Information
//============================================================
var router = require('express').Router();
var fs = require("fs");
const util = require("util");
// const readFileAsync = util.promisify(fs.readFile)
// const writeFileAsync = util.promisify(fs.writeFile)
const uuidv1 = require("uuid");

var dbJson = require("../db/db.json");

router.get("/notes", function(req, res) {

    fs.readFile("db/db.json", function(err, data) { //reading the db.json file
        
        var getNotes = []; //empty array to store notes after being read

        if (err) {
            console.log(err);
        }

        getNotes = JSON.parse(data) || []; //converting JSON string into JS object
        console.log(getNotes);
        res.send(getNotes); //seding the parsed JS object back to undatedNotes array
        
    });
});

router.post("/notes", function(req, res) {

    var addNotes = [];
    const note = req.body;
    res.json(note)

    dbJson.push(note) //updating the array itself

    note.id = Math.floor(Math.random() * 30000) + 1 //andom id index being assigned it to  
        console.log(note)
        
        addNotes.push(note) //pushing our test from postman to our addNotes array
        
    fs.writeFile("db/db.json", JSON.stringify(dbJson), function(err) {
        res.send("Updated db.json")
        res.end() 
    })
});

router.delete("/notes:id", function(req, res) {


    const idTEST1 = req.params.id;
    const idTEST2 = req.body;

  //we want all characters NOT matching the one being updated 
  const unTouchedChar = dbJson.filter(e => e.id === idTEST1)

  //add back in the character that is being updated 
  unTouchedChar.push(idTEST2)

  fs.writeFile("db/db.json", JSON.stringify(unTouchedChar), function(err) {
    res.send("character updated")
    res.end()
    // const removeId = req.params.id;
    // const id2= req.body;
  });
    
  

});



module.exports = router;