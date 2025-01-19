const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); //get the client
const express = require("express");
const path = require('path');
const app = express();
const methodOverride = require("method-override");
const exp = require('constants');
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended:true }));
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Engineer@7245'
});


let getUser = ()=> {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];   
};

//1 Home Route
app.get("/", (req, res)=> {
    let q = `SELECT count(*) FROM user`;
    try {
    connection.query(q, (err, result)=> {
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
    })
    } catch(err) {
    console.log(err);
    res.send("Some error in DB");
    }
});

//2 Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users)=> {
            if(err) throw err;
            res.render("showusers.ejs", { users });
        })
        } catch(err) {
        console.log(err);
        res.send("Some error in DB");
        }
    
});

//3 i) EDIT ROUTE
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result)=> {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
        } catch(err) {
        console.log(err);
        res.send("Some error in DB");
        }
});

// 4. UPDATE (DB) ROUTE
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result)=> {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("wrong password");
            } else {
                let q2 = `UPDATE user SET username=${newUsername} WHERE id = '${id}`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        })
        } catch(err) {
        console.log(err);
        res.send("Some error in DB");
        }
});

//5. Add a new User i)
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

//5 Add a new User ii)
app.post("/user", (req, res) => {
    let {username, email, password} = req.body;
    let id = uuidv4();
    let newUser = [id, username, email, password];
    let q = `INSERT INTO user(id, username, email, password) VALUES (?, ?, ?, ?)`;
    try {
        connection.query(q, newUser, (err, user) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result)=> {
            if(err) throw err;
            let user = result[0];
            res.render("pass.ejs", { user });
        })
        } catch(err) {
        console.log(err);
        res.send("Some error in DB");
        }
});
//6 Delete user
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("Wrong Password");
            } else {
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.listen("8080", ()=> {
    console.log("Server is listening to port 8080");
});








// connection.end(); //to close connection