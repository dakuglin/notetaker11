const router = require("express").Router;
const store = require("../db/store");


router.get("/api", (req, res) => {
    var notes = JSON.parse("../db.json") || [];
    console.log(notes);

    // notes.push(newNote)

    // .then((notesArr) =>[...notesArr, newNote])
    // .then(updatedNotes => fs.wirtefile((updatedNotes)))

})

// router.post("/notes", (req, res) => {
//     store 
//     //function 
//     //before stringify I need to parse 
//     //JSON.stringify()

//     //where I push the file and 

// })

// router.delete("/notes:id", (req, res) => {
//     store 

// })


// modeule.exports = router;






// router.get("/notes",(req,res) => {

//     //get read file 
//     //put function here
//     // JSON.parse()
//     store
//         .getNotes() //route to read from the file
//         .then(notes) 
    
// })