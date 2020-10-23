//Required In Information
//============================================================
var router = require('express').Router();
var fs = require("fs");
var updatedNotes = [];

// Routes
// ===========================================================
router.get("/notes", function(req, res) {

    fs.readFile("../db/db.json", function(err, data) {

        if(err) {
            console.log("error!");
        }
        var note = JSON.parse(data) || [];
        console.log(note);

        note.push(updatedNotes)

        //let notesArr = [...notesArr, updatedNotes]
    })
    
    // var note = JSON.parse("test.json") || [];
    //  console.log(note)
    // // note.push(updatedNotes)
    // .then((notesArr) =>[...notesArr, updatedNotes])
    // .then(updatedNotes => fs.wirtefile((updatedNotes)))
    // console.log(updatedNotes)
    
});

router.post("/notes", function(req, res) {

    fs.writeFile("../db/db.json", JSON.stringify(updatedNotes), function(err) {

        if(err) {
            console.log("error!");
        }

        //     //let notesArr = [...notesArr, updatedNotes]
    })

    // router.post("/notes", function(req, res) {
    //     //json.stringify
    //     console.log(req.body);
    //     var note = JSON.stringify(userInput)
    //     .then(() => updatedNotes)
});

// router.get("/api", (req, res) => {
//     var notes = JSON.parse("db.json") //|| [];
//     console.log(notes);

//     // notes.push(updatedNotes)

//     // .then((notesArr) =>[...notesArr, updatedNotes])
//     // .then(updatedNotes => fs.wirtefile((updatedNotes)))

// })






// router.post("/notes", (req, res) => {
// //     store 
// //     //function 
// //     //before stringify I need to parse 
// //     //JSON.stringify()

// //     //where I push the file and 

// })

// router.delete("/notes:id", (req, res) => {
//     store 

// })

 module.exports = router;







// router.get("/notes",(req,res) => {

//     //get read file 
//     //put function here
//     // JSON.parse()
//     store
//         .getNotes() //route to read from the file
//         .then(notes) 
    
// })