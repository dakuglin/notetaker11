
const fs = require("fs");
//const { isBuffer } = require("util");

let rawdata = fs.readFileSync("test.json")
//console.log(rawdata) //reading in raw hex format and not JSON
let testing = JSON.parse(rawdata);
console.log(testing)

fs.readFile("test.json", function(err, data) {
    console.log("this is after the read call")
    
    if(err) {
        console.log("err")
    }
    let testing2 = JSON.parse(data)
    console.log(testing2)


}) //the readFile function reads file data in an asynchronous manner










//module.exports = new Store();