//Required In Information
//============================================================
var router = require('express').Router();
const e = require('express');
var fs = require("fs");
const uuidv1 = require("uuid");

  
//const { delete } = require('./htmlRoutes');


// Routes
// ===========================================================
router.get("/notes", function(req, res) { //retrieving data and pushing it back to client 

    fs.readFile("db/db.json", function(err, data) {
        // console.log(data)

        var updatedNotes = [];

        if (err) {

            console.error(err)
        }
        updatedNotes = JSON.parse(data) || [];
        console.log(updatedNotes);

        // note.push(updatedNotes)
        res.send(updatedNotes);
        
    })
       
});

router.post("/notes", function(req, res) {
    //console.log(req.body)
    var existingNotes = [];
    const note = req.body
    fs.readFile("db/db.json", function(err, data) {
        // console.log(data)
        if (err) {

            console.error(err)
        }
        existingNotes = JSON.parse(data) || [];

        console.log(`existing=${JSON.stringify(existingNotes)}`);
        note.id = uuidv1()
        // Math.floor(Math.random() * 1000) + 1 //getting a random id index
        console.log(note)
        existingNotes.push(note)
        console.log(`updated=${existingNotes}`)

        fs.writeFile("db/db.json", JSON.stringify(existingNotes), function(err) {

        if(err) {
            // console.log("error!");
            console.error(err)
        }

        
        })
        res.send(existingNotes)
       
    })

   
   
   

    // fs.writeFile("db/db.json", JSON.stringify(existingNotes), function(err) {

    //     if(err) {
    //         // console.log("error!");
    //         console.error(err)
    //     }

    //     //     //let notesArr = [...notesArr, updatedNotes]
    // })

 
    // router.post("/notes", function(req, res) {
    //     //json.stringify
    //     console.log(req.body);
    //     var note = JSON.stringify(userInput)
    //     .then(() => updatedNotes)
});


router.delete("/notes", function(req, res) {
    //console.log(req.body)
    var id = parseInt(req.query.id)
    console.log(id);
    var existingNotes = [];
    // const note = req.body
    fs.readFile("db/db.json", function(err, data) {
        // console.log(data)
        if (err) {

            console.error(err)
        }
        existingNotes = JSON.parse(data) || [];

        console.log(`existing=${JSON.stringify(existingNotes)}`);

        var filteredNotes = [];
        // for (var i=0; i<existingNotes.length; i++)
        for (const i in existingNotes){
            console.log(i) 
            console.log(existingNotes[i])
            var element = existingNotes[i];

            if(element.id !== id) {
                filteredNotes.push(element)
            }
        }
        // var filteredNotes = existingNotes.filter((e) => {e.id !== id}) 
        console.log(filteredNotes)
        
        //existingNotes.push(note)
        
        fs.writeFile("db/db.json", JSON.stringify(filteredNotes), function(err) {

        if(err) {
            // console.log("error!");
            console.error(err)
        }

        
        })
        res.send(filteredNotes)
       
    })

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