//https://levelup.gitconnected.com/set-up-and-run-a-simple-node-app-project-38b403a3dc09

var querystring = require('querystring');
const express = require("express");
const app = express();
const port = "3000";

app.use(express.static(__dirname + "/Public"));

//api keys and variables
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const scope = 'user-read-private user-read-email';

//end api keys


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

app.get('/login', function(req, res) {

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri
        }));
});

app.get('/logged', function (req, res){
    let code = req.query.code || null;
    res.sendFile("./Public/html/logged.html", {root: __dirname})
    console.log(code);
});

app.listen(port, function ()  {
    console.log(`Now listening on port ${port}`);
});