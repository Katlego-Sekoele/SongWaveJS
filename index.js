//https://levelup.gitconnected.com/set-up-and-run-a-simple-node-app-project-38b403a3dc09

const express = require("express")
const app = express();
const port = "3000"

app.use(express.static(__dirname + "/public"));


/*
The app object contains several functions for routing requests, based on HTTP methods, the most common of these functions are:

app.get()
app.post()
app.put()
app.delete()
app.use()
app.all()
*/

app.get("/", function (req, res){
   res.sendFile("./index.html", {root: __dirname})
});

app.get("/login", function (req, res) {
    res.send("login request sent");
});

app.listen(port, function ()  {
    console.log(`Now listening on port ${port}`);
});