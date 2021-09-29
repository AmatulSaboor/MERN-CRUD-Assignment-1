const express = require("express");
const app = express();
const fs = require("fs");
const url = require("url");
const path = require("path");
const port = 3000;

app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine','ejs');


// =================================== index page ==================================
app.get('/', (req, res) => {
    console.log("hi welcome");
    fs.readFile(path.join(__dirname, 'data/user_info.json'), (err, data)=>
    {
        const userData = JSON.parse(data.toString());
        if(err) throw err;
        res.render('./index', {userData});
    });
});

// ==================================== add =========================================
app.post('/add', (req, res) =>{
    fs.readFile(path.join(__dirname, 'data/user_info.json'), (err, data) =>{
        if (err) throw err;
        let userData = JSON.parse(data.toString());
        userData.push(req.body);
        fs.writeFile(path.join(__dirname, 'data/user_info.json'), JSON.stringify(userData, null, 4), err =>
        {
            if(err) throw err;
        });
    });
    res.redirect('/');
});

// ==================================== delete ======================================

app.listen(port);