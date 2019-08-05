const express = require("express");
const app = express();


app.get("/", function (req, res) {

    res.send("THIS WILL BE THE HOME PAGE AFTER NODEMON");

});



app.listen(3000, function () {

    console.log("THE SERVER IS UP");

});



