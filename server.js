//Express is for building the Rest apis
const express = require("express");

//body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//ROUTES:
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my simple application application." });
});

//#################################
//open Mongoose connection to DB:

const db = require("./app/models");
const Role = db.role;

db.mongoose
    .connect('mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Succefully connect to MongoDB");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

//Initial() function helps us to create 3 important rows in roles collection
    function initial(){
        Role.estimatedDocumentCount((err, count) => {
          if (!err && count == 0){

//create user role from Role model:
//initiate new role object from Role model:
            new Role({
              name: "user"
            }).save(err => {
              if (err) {
                console.log("error", err);
              }

              console.log("Added 'user' to roles collection")
            });

//create moderator role:
            new Role({
              name: "moderator"
            }).save(err => {
              if (err) {
                console.log("error", err);
              }

              console.log("Added 'moderator' to roles collection");
            });

//create admin role:
            new Role({
              name: "admin"
            }).save(err => {
              if (err) {
                console.log("error", err);
              }

              console.log("Added 'admin' to roles collection");
            });
          }
        });
    }

//#################################

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});