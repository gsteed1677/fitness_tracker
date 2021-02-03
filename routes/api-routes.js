const app = require("express").Router();
const Fitness = require("../models/fitness.js");

app.post("/api/workouts", (req, res) => {
    Fitness.create({})
    .then((fitnessDB) => {
        res.json(fitnessDB)
    })
    .catch((err) => {
        res.json(err)
    })
});

app.get("/api/workouts", (req, res) => {
    db.Fitness.find({}, (err, fitnessDB) => {
        if(err){
            console.log(err);
        } else {
            res.json(fitnessDB)
        }
    });
});
    
   

module.exports = app;