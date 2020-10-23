//Required In Information
//============================================================
var router = require('express').Router()
const path = require("path");


// Routes
// ===========================================================
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

router.get("*", (req, res) => { //* is the forward slash 
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = router;