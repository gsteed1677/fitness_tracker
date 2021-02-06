const app = require("express").Router();
const Fitness = require("../models/fitness.js");

app.post("/api/workouts", (req, res) => {
    Fitness.create({})
    .then((fitnessDB) => {
        res.json(fitnessDB)
    })
    .catch((err) => {
        res.json(err)
        console.log(err)

    })
});

app.put("/api/workouts/:id", ({ body, params}, res) => {
    Fitness.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } } ,
    )
    .then(fitnessDB => {
        res.json(fitnessDB);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts", (req, res) => {
    Fitness.find({}, (err, fitnessDB) => {
        if(err){
            console.log(err);
        } else {
            res.json(fitnessDB)
            console.log(fitnessDB)
        }
    });
});

app.get("/api/workouts", (req, res) => {
    Fitness.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$excerises.duration"
                },
            },
        },
    ]);
});



app.delete("/api/workouts", ({ body }, res) => {
  Fitness.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});
    
   

module.exports = app;